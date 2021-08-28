import create from 'zustand'
function getDifferenceInDays(date1, date2) {
    const diffInMs = (date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
export const useFortnightStore = create((set, get) => ({
    fortnights:{},
    latestFortnight:{},
    createFort:true,
    fetchFortnight: async FetchFort => {
        try{
            const response = await fetch('http://localhost:3000/api/fortnight')
            const data = await response.json()
            set({fortnights: data})
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    },
    createFortnight: async(body) => {
        try{
            const response = await fetch('http://localhost:3000/api/fortnight/add-fort/',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const addedData = await response.json()
            set((state) => ({
                fortnights: [...state.fortnights, {...addedData}],
                latestFortnight:{...addedData},
                createFortnight:false
            }))
        }
        catch(e){
            console.log(e)
        }
    },
    getLatestFort: async getLatest => {
        try{
            console.log('fetching fortnight')
            const response = await fetch('http://localhost:3000/api/fortnight/get-latest-fort')
            const fortnight = await response.json()
            console.log(fortnight)
            set({latestFortnight: fortnight})
            const currentDate = new Date()
            const startedDate = new Date(fortnight.startedAt)
            const elapsedDays = getDifferenceInDays(startedDate, currentDate)
            if(elapsedDays <= 14){
                set({createFortnight:false})
            }else{
                set({createFortnight:true})
            }
        }
        catch(e) {
            console.log(e)
        }
    },
    updateFort: async(data) => {
        try {
            const resp= await fetch('http://localhost:3000/api/fortnight/update-fort', {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            const res = await resp.json();
            set({latestFortnight: res})
        } catch (e) {
            console.log(e)
        }
    }
}))
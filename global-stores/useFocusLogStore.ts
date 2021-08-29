import create from 'zustand'
function getDifferenceInDays(date1, date2) {
    const diffInMs = (date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
export const useFocusLogStore = create((set, get) => ({
    focusLogs:{},
    latestFocusLog:{},
    createFocusLog:true,
    focusLogSum:{},
    logsFetched:false,
    fetchFocusLog: async FetchFocus => {
        try{
            const response = await fetch('http://localhost:3000/api/focusLog')
            const data = await response.json()
            set({focusLogs: data, logsFetched:true})
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    },
    addFocusLog: async(body) => {
        try{
            const response = await fetch('http://localhost:3000/api/focusLog/add-focusLog/',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const addedData = await response.json()
            set((state) => ({
                focusLogs: [...state.focusLogs, {...addedData}],
                latestFocusLog:{...addedData},
                createFocusLog:false
            }))
        }
        catch(e){
            console.log(e)
        }
    },
    getLatestFocusLog: async getLatest => {
        try{
            console.log('fetching latest focus log')
            const response = await fetch('http://localhost:3000/api/focusLog/get-latest-focusLog')
            const focusLog = await response.json()
            console.log(focusLog)
            set({latestFocusLog: focusLog})
            const currentDate = new Date()
            const startedDate = new Date(focusLog.startedAt)
            const elapsedDays = getDifferenceInDays(startedDate, currentDate)
            if(elapsedDays <= 1){
                set({createFocusLog:false})
            }else{
                set({createFocusLog:true})
            }
        }
        catch(e) {
            console.log(e)
        }
    },
    updateFocusLog: async(data) => {
        console.log(data)
        try {
            const resp= await fetch('http://localhost:3000/api/focusLog/update-focusLog', {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            const res = await resp.json();
            set({latestFocusLog: res})
        } catch (e) {
            console.log(e)
        }
    },
    getSumFocusLog: async getdata => {
        try{
            const response = await fetch('http://localhost:3000/api/focusLog/aggregate-focusLogs')
            const data = await response.json()
            set({focusLogSum: data._sum})
            console.log(data._sum)
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    }
}))
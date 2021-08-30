import create from 'zustand'

function CompareDate(date1, date2){
    if(new Date(date1).getMonth() === new Date(date2).getMonth() && new Date(date1).getFullYear() === new Date(date2).getFullYear() && new Date(date1).getDay() === new Date(date2).getDay() && new Date(date1).getDate() === new Date(date2).getDate()){
        return false
    }else{
        return true
    }

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
            set({latestFocusLog: {...focusLog[0]}})
            const currentDate = new Date()
            const startedDate = new Date(focusLog[0].startedAt)
            set({createFocusLog: CompareDate(currentDate, startedDate)})
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
            get().getSumFocusLog()
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
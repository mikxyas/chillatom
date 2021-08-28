import create from "zustand";

type UserProp = {
    name:string,
    collection:object,
    Fortnight:object,
    listeningTo: string,
    focusingOn: string,
    focusFor:string,
    chillFor:string,
}
type User = {
    user:UserProp[];
    fetch:any;
    userFetched:boolean,
    loading:boolean,
    error:boolean,
    updateListeningTo:any,
    updatePomoTime:any,
    updateFocusingOn: any,
    updateTheme:any
}

export const useUserStore = create<User>(set => ({
    user:[],
    userFetched:false,
    loading:false,
    error:false,
    fetch: async FetchData => {
        try{
            set({loading:true})
            const response = await fetch('http://localhost:3000/api/user')
            set({user: await response.json(), userFetched:true,loading:false})
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    },
    updateListeningTo: async(video_id) => {
        try{
            const response = await fetch('http://localhost:3000/api/user/update-listen',{
                method:'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({video_id:video_id})
            })
            const res = await response.json();
            set({user: res})
        }
        catch(e){
            console.log(e)
        }
    },
    updatePomoTime: async(body) => {
        try{    

                const response = await fetch('http://localhost:3000/api/user/update-pomo',{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                const updatedData = await response.json()
                set({user:updatedData})
        }
        catch(e){
            console.log(e)
        }
    },
    updateFocusingOn: async(body) => {
        try{    
                const response = await fetch('http://localhost:3000/api/user/update-focusing',{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                const updatedData = await response.json()
                set({user:updatedData})
        }
        catch(e){
            console.log(e)
        }
    },
    updateTheme: async(data) => {
        try{    
            const response = await fetch('http://localhost:3000/api/user/update-theme',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            const updatedData = await response.json()
            set({user:updatedData})
    }
    catch(e){
        console.log(e)
    }
    }
}))
import create from "zustand";
import {UserProp} from '../model/user'


interface User  {
    user:{
        [key: string]:UserProp
    };
    fetch:any;
    userFetched:boolean;
    loading:boolean;
    error:boolean;
    updateListeningTo:any;
    updatePomoTime:any;
    updateFocusingOn: any;
    updateTheme:any;
    updateBackground:any;
}

export const useUserStore = create<User>(set => ({
    user:{},
    userFetched:false,
    loading:false,
    error:false,
    fetch: async FetchData => {
        try{
            set({loading:true})
            const response = await fetch('api/user')
            set({user: await response.json(), userFetched:true,loading:false})
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    },
    updateListeningTo: async(video_id) => {
        try{
            const response = await fetch('api/user/update-listen',{
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

                const response = await fetch('api/user/update-pomo',{
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
    updateBackground: async(body) => {
        try{    
                const response = await fetch('api/user/update-bg',{
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
                const response = await fetch('api/user/update-focusing',{
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
            const response = await fetch('api/user/update-theme',{
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
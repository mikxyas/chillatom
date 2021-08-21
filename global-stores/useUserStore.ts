import create from "zustand";

type User = {
    user:object;
    fetch:any;
    userFetched:boolean,
    loading:boolean,
    error:boolean,
}

export const useUserStore = create<User>(set => ({
    user:{},
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
    }
}))
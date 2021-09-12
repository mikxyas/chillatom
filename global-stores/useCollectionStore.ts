import create from 'zustand'
import { collectionProp } from '../model/collection'
import { focusLog } from '../model/focusLogs'

interface collectionStore {
    collection:{
        [key:string]:collectionProp
    };
    loading_collection:boolean;
    error:boolean;
    fetchCollection:any;
    AddCollection:any;
    deleteCollection:any;
    collection_fetched:boolean;

}

export const useCollectionStore = create<collectionStore>((set, get) => ({
    collection:{},
    loading_collection:false,
    error:false,
    collection_fetched:false,
    fetchCollection: async FetchColl => {
        try{
            set({loading_collection:true})
            const response = await fetch('api/collection/get-coll/')
            const data = await response.json()
            set({collection: data,loading_collection:false, collection_fetched:true})
            console.log(data)
        }
        catch(e){
            console.log(e)
            set({error:true, loading_collection:false, collection_fetched:false})
        }
    },
    AddCollection: async(body) => {
        try{
            set({loading_collection: true})
            const response = await fetch('api/collection/add-coll/',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const addedData = await response.json()
            set<any>((state) => ({
                collection: {...state.collection, addedData}
            }))
        }
        catch(e){
            set({error:true})
            console.log(e)
        }
    },
    deleteCollection: async(id, key) => {
        try{
            set((state) => ({
                collection: Object(state.collection).filter((coll, id) => id !== key)
            }))
            const response = await fetch(`api/collection/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            const res = await response.json();
            
        }
        catch(e){
            console.log(e)
        }
    }
}))
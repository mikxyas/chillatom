import create from 'zustand'

export const useCollectionStore = create((set, get) => ({
    collection:[],
    loading_collection:false,
    error:false,
    fetchCollection: async FetchColl => {
        try{
            set({loading_collection:true})
            const response = await fetch('http://localhost:3000/api/collection/get-coll/')
            set({collection: await response.json(),loading_collection:false})
        }
        catch(e){
            set({error:true, userFetched:false, loading:false})
        }
    },
    AddCollection: async(body) => {
        try{
            set({loading_collection: true})
            const response = await fetch('http://localhost:3000/api/collection/add-coll/',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const addedData = await response.json()
            set((state) => ({
                collection: [...state.collection, {...addedData}]
            }))
        }
        catch(e){
            set({error:true})
            console.log(e)
        }
    },
    deleteCollection: async(id, key) => {
        try{
            const response = await fetch(`http://localhost:3000/api/collection/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
              });
            const res = await response.json();
            set((state) => ({
                collection: state.collection.filter((coll, id) => id !== key)
            }))
        }
        catch(e){
            console.log(e)
        }
    }
}))
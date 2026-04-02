
import {create} from 'zustand';

const useRequestStore = create((set, get) => ({
    method: 'GET',
    url: '',
    isLoading:false,
    response:null,

    setMethod:newMethod=>set({method:newMethod}),
    setUrl:newUrl=>set({url:newUrl}),
    sendRequest:async()=>{
        const {method, url} = get();
        set({isLoading:true, response:null});
        try{
            const res = await fetch(url, {method});
            const data = await res.json();
            set({response:data});
        }catch(err){
            set({response:{error:err.message}, isLoading:false});
        }
    },
}));

export default useRequestStore;
import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/sobre?'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/sobre?id=eq${id}`)
    if(data){
        return data;
    }

    return {}
}
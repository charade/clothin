import axios, { AxiosResponse } from "axios";

const request = axios.create({
    baseURL : 'http://localhost:8080/sneakers-api'
})
export type ItemsType =  {
    id : string,
    imageUrl : string,
    brandsName: string,
    name : string,
    price : string,
    gender : string
}
export type FilterType = {
    genre ?: string;
    maxPrice ?: number;
    brand ?: string
};
//filtering sneakers by gender
export const getGender = (gender: string) => request.get(`/get-gender/${ gender }`);
//filtering sneakers by brand
export const getABrand = (brand : string) => request.get(`/get-a-brand/${brand}`);
//request all then get 1 to 5 sneaker(s) randomly
export const suggestionsLoader  = async() => {
    try{
        let sneakers : AxiosResponse<ItemsType[], any> =  await request.get('/');
        const results = sneakers.data;
        const randomSneakers : ItemsType[] = [];
        /* loop through sneakers and generate random */
        for(let i = 0; i < 5; i ++){
            const random =  ~~(results.length * Math.random());
            if(randomSneakers.every(item => item.id !== results[random].id)){
                randomSneakers.push(results[random])
            }
        }
        return randomSneakers;
    }
    catch{
        //need action if an error occured
    }
}
//get details of one sneaker
export const getDetails = (id : string) => {
    return request(`/get-one/${id}`)
}
//request all available brands
export const getBrands = () => {
    return request(`/get-brands`);
}
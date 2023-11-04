import { mockProducts } from "../../libs/mockProducts";



export function load ({ params }){
    return {
        products : mockProducts
    }
}
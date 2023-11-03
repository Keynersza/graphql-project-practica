import { useMutation, useQuery } from "@apollo/client"
import { ALL_PRODUCTS } from "./query-products"
import { ADD_PRODUCT } from "./mutation-product"

export const useAllProducts =()=>{
    const resultado = useQuery(ALL_PRODUCTS)
    return resultado
}

export const useAddProducts = () =>{
    const resultado = useMutation(ADD_PRODUCT)
    return resultado
}
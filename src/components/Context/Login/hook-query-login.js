import { useLazyQuery } from "@apollo/client"
import { GET_USERS } from "./query-login"

export const useSignIn = () =>{
    const result = useLazyQuery (GET_USERS)
    return result
}


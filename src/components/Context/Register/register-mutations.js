import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!){
addPerson(name: $name, email: $email, password: $password) { 
 name
 email
 password
 }
}
`
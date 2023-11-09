import { gql } from "@apollo/client";

export const GET_USERS = gql`
query FindPersonByEmail($name: String!, $email: String!, $password: String!) {
  findPersonByEmail(name: $name, email: $email, password: $password) {
    id
    name
    email
    password  
  }
}
`
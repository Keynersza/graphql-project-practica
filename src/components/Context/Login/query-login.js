import { gql } from "@apollo/client";

export const GET_USERS = gql`
query FindPersonByEmail($email: String!, $password: String!) {
  findPersonByEmail(email: $email, password: $password) {
    email
    password  
  }
}
`
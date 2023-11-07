import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
query AllProducts {
   allProducts {
    id
    imageProduct 
    nameProduct
    description
    price
    dueDate
  }
}
`
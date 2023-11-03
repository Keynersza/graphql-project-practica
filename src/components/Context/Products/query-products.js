import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
query AllProducts {
   allProducts {
    imageProduct 
    nameProduct
    description
    price
    dueDate
  }
}
`
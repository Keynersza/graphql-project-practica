import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
mutation Mutation($idUser: String!, $imageProduct: String!, $nameProduct: String!, $description: String!, $price: String!, $dueDate: String!) {
  addProducts(imageProduct: $imageProduct, nameProduct: $nameProduct, description: $description, price: $price, dueDate: $dueDate, idUser: $idUser) {
    imageProduct
    nameProduct
    description
    price
    dueDate
    idUser
  }
} `
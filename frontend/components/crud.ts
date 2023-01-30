import client from '../apollo-client';
import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query todos {
    todos {
    id
    title
    isFinished
  }
  }
`

export async function getData() {
  const { data } = await client.query({
    query: GET_TODOS,
  });

  return {
    todos: data.todos,
  };
}

export const UPDATE_TODO = gql`
        mutation ($id: Int!, $isFinished: Boolean!) {
          updateTodo(id: $id, isFinished: $isFinished) {
            todo{
                id
                title
                isFinished
            }
          }
        }
      `

export const GET_UPDATED_TODO = gql`
              query GetTodo($id: Int!){
                todos(id: $id) {
                  id
                  title
                  isFinished
                }
              }
            `

export const DELETE_TODO = gql`
          mutation ($id:Int!) {
            deleteTodo(id: $id) {
              message
          }
}
`
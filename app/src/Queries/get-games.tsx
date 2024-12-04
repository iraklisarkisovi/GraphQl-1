import { gql } from "@apollo/client";

export const GET_GAMES = gql`
    query Query {
    games {
        title,
        id,
        platform 
    }
}
`
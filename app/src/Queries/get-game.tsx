import { gql } from "@apollo/client";

export const GET_GAME = gql`
    query Query($gameId: ID!) {
        game(id: $gameId) {
            id
            platform
            title
    }
}
`
import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GAMES } from '../Queries/get-games'
import { IGame } from '../interfaces/game.interface'
import GamesList from '../Components/GamesList'

const Gamespage:React.FC = () => {
    const {loading, error, data} = useQuery<{games: IGame[]}>(GET_GAMES)

    if(loading) return <h1>Loading data...</h1>
    
  return (
    <div>
        <h1>GamesPage</h1>
        <GamesList games={data?.games}/>
        {error && error.message}
    </div>
  )
}

export default Gamespage

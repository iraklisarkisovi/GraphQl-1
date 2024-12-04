import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GAME } from '../Queries/get-game'
import { Link, useParams } from 'react-router-dom'
import { IGame } from '../interfaces/game.interface'

const Gamepage:React.FC = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_GAME, {
        variables: {gameId: id}
    }) 

    if(loading) return <h1>Loading data...</h1>

    const {title, platform} = data ? data.game : ({} as IGame) 
  return (
    <div>
      {error && error.message}
      <h1>{title}</h1>
      <p>{platform.map((p: string) => (
        <li key={p}>{p}</li>
      ))}</p>

      <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default Gamepage

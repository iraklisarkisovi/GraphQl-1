import React from 'react'
import { IGame } from '../interfaces/game.interface'
import GameItem from './GameItem'


interface GamesListProps {
    games: IGame[] | undefined
}

const GamesList:React.FC<GamesListProps> = ({games}) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '800px'}}>
            {games?.map((game) => (
                <GameItem title={game.title} id={game.id} platform={game.platform}/>
            ))}
      </div>
    </div>
  )
}

export default GamesList

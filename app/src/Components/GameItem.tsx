import React from 'react'
import { useNavigate } from 'react-router-dom'

interface GameItemProps { 
    id: string
    title: string
    platform: string[]
}
const GameItem:React.FC<GameItemProps> = ({id, platform, title}) => {
  const navigate = useNavigate()

  return (
    <div style={{width: '200px'}}>
      <h2 key={id}>{title}</h2>
      <p>{platform.map(p => (
        <li key={p}>{p}</li>
      ))}</p>
      <button onClick={() => navigate(`/${id}`)}>Game page</button>
    </div>
  )
}

export default GameItem

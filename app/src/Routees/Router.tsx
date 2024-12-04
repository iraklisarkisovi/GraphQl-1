import { Route, Routes } from 'react-router-dom'
import Gamespage from '../Pages/Gamespage'
import Gamepage from '../Pages/Gamepage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Gamespage/>}/>
        <Route path='/:id' element={<Gamepage/>}/>
    </Routes>
  )
}

export default AppRouter

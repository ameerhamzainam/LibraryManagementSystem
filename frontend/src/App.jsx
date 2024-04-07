import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/Books/CreateBooks.jsx'
import ShowBook from './pages/Books/ShowBooks.jsx'
import EditBook from './pages/Books/EditBooks.jsx'
import DeleteBook from './pages/Books/DeleteBooks.jsx'
import CreateBorrows from './pages/Borrows/CreateBorrows.jsx'
import EditBorrows from './pages/Borrows/EditBorrows.jsx'
import DeleteBorrows from './pages/Borrows/DeleteBorrows.jsx'
import ShowBorrows from './pages/Borrows/ShowBorrows.jsx'
import LoginPage from './pages/Login.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/borrows/create/:id' element={<CreateBorrows/>}/>
      <Route path='/borrows/details/:id' element={<ShowBorrows/>}/>
      <Route path='/borrows/edit/:id' element={<EditBorrows/>}/>
      <Route path='/borrows/delete/:id' element={<DeleteBorrows/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}
//end
export default App
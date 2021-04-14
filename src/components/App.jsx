import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import TodoList from '../components/TodoList'


const App = () =>{
    return(
        <BrowserRouter>
            <div className="App">
                <Home/>
                <TodoList/>
            </div>
        </BrowserRouter>
    )
}

export default App;
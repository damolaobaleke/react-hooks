import React, { useState, useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewTodoForm from '../components/AddNewTodoForm'

//using state inside a functional component
const TodoList =()=> {
    //initial state is an array of objects
    //array destructuring
    //arg 1= state it self , arg 2= function you can use to edit the state
    const [todos, setTodos] = useState([
        {
            text: 'Software',
            id: 1,
        },
        {
            text: 'Security',
            id: 2,
        },
        {
            text: 'Cloud',
            id: 3,
        },
    ]);

    //another state for the counter
    const[count, setCount] = useState(0) //initial state of count is 0

    //update state, add todo items
    const addTodo=()=>{
        setTodos([
            ...todos,
            {text: document.querySelector('.to-do').value, id: uuidv4()}
        ])

        //clear input
        document.querySelector('.to-do').value = ''
    }

    //update  TWo
    const addTodoTwo=(text)=>{
        if(text){
        setTodos([
            ...todos,
            {text: text, id: uuidv4()}
        ])
        }else{
            console.log("No value in input")
        }

        
    }

    //
    const addToScore=()=>{
        setCount(count + 1 )
    }

    //onComponentUpdated , can also add limits
    useEffect(()=>{
        console.log(todos);
    });

    //only run when todos state is changed
    useEffect(()=>{
        console.log(todos);
    }, [todos]);

    //only run when count state is changed
    useEffect(()=>{
        console.log(todos);
    }, [count]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="to-do form-control my-3" name="todo" placeholder="to-do-item"/>
                    <ul>
                        {/* for each item */}
                        {todos.map((todo)=>{
                            return(
                                <li key={todo.id}>{todo.id}<p>{todo.text}</p></li>
                            )
                        })}
                    </ul>
                    <button className="btn btn-success mt-4" onClick={addTodo}>Add items</button>
                </div>
            </div>

            {/* On form suubmitted calls method */}
            <div className="row mt-5">
                <AddNewTodoForm addTodo={addTodoTwo}/>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <div>
                        <p className="">{count}</p>
                    </div>
                <button className="btn btn-danger my-3" onClick={addToScore}>Increment</button>
               </div>
            </div>
        </div>
    )
}

export default TodoList;
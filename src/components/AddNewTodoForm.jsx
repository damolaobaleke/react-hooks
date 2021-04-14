import React, { useState} from 'react';

const AddNewTodoForm =(props)=>{

const [todos, setToDos] = useState('') //initial state is an empty string

const handleSubmit=(e)=>{
    e.preventDefault();
    props.addTodo(todos); //the value from input
    //clear input
    setToDos('')
}


return(
    <div className="col-md-6">
        <h1>Add</h1>
        <form onSubmit={handleSubmit} action="">
            <input className="form-control my-2" type="text" value={todos} name="" id="todo" onChange={(e)=>setToDos(e.target.value)}/>
            <button className="btn btn-success" type="submit">Input Item</button>
        
        </form>
    </div>
)
}

export default AddNewTodoForm;
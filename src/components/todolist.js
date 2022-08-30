import React from "react";
import "./todolist.css"
const  Todo=({todos, setTodos ,setEdittodo})=>{
    const handleDelete=({task})=>{
        setTodos(todos.filter((todo)=>todo.task!==task))

    }
    const handleEdit=({task})=>{

        const findTodo=todos.find((todo)=>todo.task===task);
        setEdittodo(findTodo)
    }

    return(
       <div>

       {todos.map((todo)=>(
         <div>
        <li className="list" key={todo.task}>
            <input className="list-item" type ="text" value={todo.title} onChange={(e)=>e.preventDefault()}/>
           
                <span>
                <button className="edit" onClick={()=>handleEdit(todo)}>Edit</button>
                <button  className="delete"onClick={()=>handleDelete(todo)}>Delete</button>
           
                
                </span>
         

        </li>
        </div>
       )

       
       )}
       
       </div>
    )
}

export default Todo;
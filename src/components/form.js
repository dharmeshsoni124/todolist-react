import React from "react";
import "./form.css"
import {v4 as uuidv4} from "uuid";
const Form=({input , setInput, todos ,setTodos,edittodo,setEdittodo})=>{
    const oninput=(e)=>{
        setInput(e.target.value);
    }
    const formsubmit=(e)=>{
        e.preventDefault();
        if(!edittodo){
            setTodos([...todos,{task :uuidv4(),title:input ,completed:false}]);
            setInput("");
        }
        
    }
    return(
        <div>
            <h1>To Do List</h1>
           <form onSubmit={formsubmit}>
            <input  className="input-box" type="text"value={input} onChange={oninput}/>
            <button  id ="btn"type="submit">Add Todo</button>
           </form>
        </div>
    )
}

export default Form;
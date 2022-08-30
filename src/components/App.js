import React from "react";
import { useState } from "react";
import "./../styles/App.css";
import Form from "../components/form.js"
import Todo from "../components/todolist.js"

function App() 

{
	const [input ,setInput]=useState("");
	const [todos ,setTodos]=useState([]);
	const[edittodo,setEdittodo]=useState(null);
	return (
	<div id="main">
	<Form 
	input={input}
	setInput={setInput}
	todos={todos}
	setTodos={setTodos}
	edittodo={edittodo}
	setEdittodo={setEdittodo}/>
	
	<div>
	
		<Todo todos={todos} setTodos={setTodos} setEdittodo={setEdittodo}/>
	</div>
	</div>
	);
}


export default App;

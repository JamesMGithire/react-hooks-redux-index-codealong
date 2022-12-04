import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoContainer() {
  const todos = useSelector(state=>state.todos.entities);
  
  const todoList = todos.map((todo, ind)=> <Todo key={ind} text={todo}/>)
  return <>
  <div>TodoContainer</div>;
  <ul>{todoList}</ul>
  </>
}

export default TodoContainer;

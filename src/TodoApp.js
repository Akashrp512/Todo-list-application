import React from "react";
import { AddTodo } from "./component/AddTodo";
import {TodoList} from "./component/TodoList";


export default function TodoApp(){
    return(
        <>
            <AddTodo />
            <TodoList />
        </>
    )
}

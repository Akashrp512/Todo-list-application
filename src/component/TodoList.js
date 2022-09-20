import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, markTodoCompleted, clearAllTodo } from "../redux/actions";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState([]);

  const actionClick = (data) => {
    if (data && data?.type === "edit") {
      dispatch(editTodo(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      dispatch(deleteTodo(data?.todo?.id));
    }
  };

  const changeEvent = (e, todoId) => {
    if (e?.target?.name !== "select_all_todo" && e?.target?.checked === true) {
      if (selectedTodo.indexOf(todoId) === -1) {
        setSelectedTodo((todo) => [...todo, todoId]);
      }
    } else if (e?.target?.name !== "select_all_todo" && e?.target?.checked === false) {
      const todos = selectedTodo.filter((todo) => todo !== todoId);
      setSelectedTodo(todos);
    }

    if (e?.target?.name === "select_all_todo" && e?.target?.checked === true) {
      todos && todos.forEach((todo, index) => {
        const allCheckbox = document.getElementsByName(`todo_${index}`);

        for (let chk of allCheckbox) {
          chk.checked = true;
          let todoId = todo?.id;

          setSelectedTodo((todo) => [
            ...todo,
            todoId
          ]);
        }
      });
    }

    else if (e?.target?.name === "select_all_todo" && e?.target?.checked === false) {
      todos && todos.forEach((todo, index) => {
        const allCheckbox = document.getElementsByName(`todo_${index}`);
        for (let chk of allCheckbox) {
          chk.checked = false;
          setSelectedTodo([]);
        }
      });
    }
  };

  const markCompleted = () => {
    dispatch(markTodoCompleted(selectedTodo));
  };

  return (
    <div className="container my-2 bg-info ">
      <div className="row pb-4" style={{height: "60px"}}>
        <div className="col-xl-12 text-right">
          {selectedTodo.length > 0 && (
            <>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(clearAllTodo())}
              >
                Clear Todos
              </button>
              <button
                className="btn btn-success ml-2"
                onClick={markCompleted}
              >
                Mark As Completed
              </button>
            </>
          )}
        </div>
      </div>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th width="3%">
              <input
                type={"checkbox"}
                onChange={(e) => changeEvent(e)}
                name={"select_all_todo"}
              />
            </th>
            <th width="30%">Name</th>
            <th width="42%">Description</th>
            <th width="8%">Status</th>
            <th width="20%">Action</th>
          </tr>
        </thead>

        <tbody>
          {todos && todos.map((todo, index) => (
            <tr key={index}>
              <td>
                <input
                  type={"checkbox"}
                  value={todo?.id}
                  onChange={(e) => changeEvent(e, todo?.id)}
                  name={`todo_${index}`}
                />
              </td>
              <td>{todo?.title}</td>
              <td>{todo?.description}</td>
              <td>
                {todo?.isCompleted ? (
                  <span className="badge badge-pill badge-success p-2">Completed</span>
                ) : todo?.isPending ? (
                  <span className="badge badge-danger">Pending</span>
                ) : (
                  ""
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => actionClick({ todo: todo, type: "edit" })}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ml-1"
                  onClick={() => actionClick({ todo: todo, type: "delete" })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

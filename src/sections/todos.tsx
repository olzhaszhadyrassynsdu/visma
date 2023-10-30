import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "@/features/todo/todo-slice";

export const Todos: FC = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <>
      <div>todos: </div>
      {todos.map((todo) => (
        <>
          <div key={todo.id} className="mb-4 bg-[#eaeaea]">
            {todo.text}

            <button
              className="ml-8 p-4 bg-gray-500"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              remove todo
            </button>
          </div>
        </>
      ))}
    </>
  );
};

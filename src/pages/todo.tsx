import { FC, useState } from "react";
import { addTodo } from "@/features/todo/todo-slice";
import { useDispatch } from "react-redux";
import { Todos } from "@/sections/todos";

export const Todo: FC = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          placeholder="write smth"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">add todo</button>
      </form>

      <Todos />
    </>
  );
};

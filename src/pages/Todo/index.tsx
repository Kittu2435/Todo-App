import { useEffect, useState } from "react";
import ButtonComponent from "../../atoms/Button";
import { addTodo, deleteTodo, fetchTodos } from "../../api";
import { TodoType } from "../../types";

const Todo = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleClick = async () => {
    if (todoInput.trim() === "") {
      alert("Please enter a todo title.");
      return;
    }

    try {
      const newTodoId = Math.floor(Math.random() * 100000);
      const newTodo = await addTodo(todoInput);

      newTodo.id = newTodoId;

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoInput("");
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    await deleteTodo(id);
    const response = todos.filter((todo: TodoType) => id != todo.id);
    setTodos(response);
  }

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos: any = await fetchTodos();
        setTodos(todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    loadTodos();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Todo's</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          placeholder="Enter todo task"
          style={{ marginRight: '10px' }}
        />
        <ButtonComponent onClick={handleClick} children="Add Task" />
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {todos.map((todo: TodoType) => (
          <div style={{ display: 'flex', gap: '10px' }}><li key={todo.id}>{todo.title}</li><button onClick={() => handleDeleteClick(todo.id)} type="submit">Delete</button></div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

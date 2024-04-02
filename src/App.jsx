import { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

// https://www.youtube.com/watch?v=YVEVrigByKY >> Parei no minuto 33. Funcao para atualizar lista.

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar alguma coisa",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Criar outra coisa",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

const [search, setSearch] = useState("");

const [filter, setFilter] = useState("All");
const [sort, setSort] = useState("Asc");


const addToDo = (text, category) => {
  const newTodo = [
    ...todos,
    {
      id: Math.floor(Math.random() * 10000), // Gera um número aleatório para servir como id. (Acredito que não seja a melhor solução.)
      text, // Virá do formulário.
      category, // Virá do formulário.
      isCompleted: false, // Presume-se que todas as tarefas não estejam completadas até serem marcadas como completadas.
    },
  ];
  setTodos(newTodo)
};

const removeToDo = (id) => {
  const newTodo = [...todos]; // Uma nova
  const filteredToDos = newTodo.filter(todo => todo.id !== id ? todo : null);
  setTodos(filteredToDos);

}

const completeToDo = (id) => {
  const newTodo = [...todos];
  newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
  setTodos(newTodo);
  
}


  return (
<div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list">
      {todos
      .filter((todo) => filter === "All"
      ? true
      :filter === "Completed"
      ? todo.isCompleted
      : !todo.isCompleted
      )
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
      sort === "Asc"
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text)
      )
      .map((todo) => (
          <Todo key={todo.id} todo={todo} removeToDo = {removeToDo} completeToDo={completeToDo}/> // Key inserida aqui.
      ))}
    </div>
        <TodoForm addToDo = {addToDo} />

</div>
  )
}

export default App

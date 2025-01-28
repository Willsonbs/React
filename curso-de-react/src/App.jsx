/* 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Primeira Tarefa",
      description: "Esta é a descrição da primeira tarefa",
      isCompleted: false,
    },

    {
      id: 2,
      title: "Segunda Tarefa",
      description: "Esta é a descrição da segunda tarefa",
      isCompleted: true,
    },

    {
      id: 3,
      title: "Terceira Tarefa",
      description: "Esta é a descrição da terceira tarefa",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    // Implementar a função para marcar uma tarefa como concluída
    // Atualizar o estado da tarefa concluída na lista de tarefas
    // Utilizar o setTasks para fazer a alteração
    // Exemplo: setTasks(tasks.map(task => task.id === id? {...task, isCompleted:!task.isCompleted } : task))
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-4xl text-slate-100 font-bold text-center mb-5">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
        <AddTask />
      </div>
    </div>
  );
}

export default App;

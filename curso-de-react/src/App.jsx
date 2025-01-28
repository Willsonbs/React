
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

import { useState } from "react";
import { Header } from "./components/Header";
import "./styles/global.css";
import styles from "./App.module.css";
import { AddNewTask } from "./components/AddNewTask";
import { InfoTaskHeader } from "./components/InfoTaskHeader";
import { TaskList } from "./components/TaskList";
import { EmpyTask } from "./components/EmpyTask";

export interface ITask {
  id: string;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksCounter, setTasksCounter] = useState(0);
  const [checkedTasksCounter, setCheckedTasksCounter] = useState(0);

  const addTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
    setTasksCounter(tasksCounter + 1);

    console.log(newTask);
  };

  const handleCheck = (id: string) => {
    // Encontra o índice da tarefa com o id fornecido
    const index = tasks.findIndex((task) => task.id === id);

    // Se o índice for encontrado, faz uma cópia do array de tarefas
    if (index !== -1) {
      const updatedTasks = [...tasks];

      // Altera o estado checked da tarefa específica
      updatedTasks[index].isChecked = !updatedTasks[index].isChecked;

      // Atualiza o estado com as tarefas atualizadas
      setTasks(updatedTasks);

      // Atualiza o contador de tarefas concluídas
      if (updatedTasks[index].isChecked) {
        setCheckedTasksCounter(checkedTasksCounter + 1);
      } else {
        setCheckedTasksCounter(checkedTasksCounter - 1);
      }
    }
  };

  const handleRemove = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    const removedTask = tasks.find((task) => task.id === id);
    if (removedTask && removedTask.isChecked) {
      setCheckedTasksCounter(checkedTasksCounter - 1);
    }

    setTasks(updatedTasks);
    setTasksCounter(tasksCounter - 1);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerInputNewTasks}>
        <AddNewTask onSubmit={addTask} />
      </div>
      <main className={styles.containerTasks}>
        <InfoTaskHeader
          tasksCounter={tasksCounter}
          checkedTasksCounter={checkedTasksCounter}
        />
        {tasks.length === 0 ? (
          <EmpyTask />
        ) : (
          <TaskList
            tasks={tasks}
            handleRemove={handleRemove}
            handleCheck={handleCheck}
          />
        )}
      </main>
    </div>
  );
}

export default App;

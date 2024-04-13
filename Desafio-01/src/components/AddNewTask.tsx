import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid"; // Importando o uuid
import styles from "./AddNewTask.module.css";
import { ITask } from "../App";

// Defina o tipo da propriedade onSubmit
interface AddNewTaskProps {
  onSubmit: (task: ITask) => void;
}

export function AddNewTask({ onSubmit }: AddNewTaskProps) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTask(event.target.value);
    setError("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Verifica se o texto da nova tarefa não está vazio
    if (newTask.trim() === "") {
      setError("Por favor, digite uma descrição para a tarefa.");
      return;
    }

    // Cria um objeto ITask com um ID único usando o uuid
    const createdTask = {
      id: uuidv4(),
      text: newTask.trim(),
      isChecked: false
    };

    onSubmit(createdTask);
    setNewTask("");
  };

  return (
    <div className={styles.container}>
      
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleInputChange}
      />
    
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
    <span className={styles.error}>{error}</span>
    </div>
  );
}

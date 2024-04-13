import { Check, Trash } from '@phosphor-icons/react';
import styles from './TaskList.module.css';
import { ITask } from '../App';

interface TaskListProps {
  tasks: ITask[];
  handleCheck: (id: string) => void;
  handleRemove: (id: string) => void;
}

export function TaskList({ tasks, handleCheck, handleRemove }: TaskListProps) {
  return (
    <div className={styles.containerTaskItens}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskItens}>
          <label htmlFor={`checkbox-${task.id}`}>
            <input
              id={`checkbox-${task.id}`}
              type="checkbox"
              readOnly
              checked={task.isChecked}
              onChange={() => handleCheck(task.id)}
            />
            <span
              className={`${styles.checkbox} ${
                task.isChecked ? styles.checkboxChecked : styles.checkboxUnchecked
              }`}
            >
              {task.isChecked && <Check />}
            </span>
          </label>
          <p className={`${styles.text} ${
            task.isChecked ? styles.textChecked : styles.textUnchecked
          }`}>{task.text}</p>
          <button className={styles.deleteButton} onClick={() => handleRemove(task.id)}>
            <Trash size={24} />
          </button>
        </div>
      ))}
    </div>
  );
}

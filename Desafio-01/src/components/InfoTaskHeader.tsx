import styles from './InfoTaskHeader.module.css';

interface InfoTaskHeaderProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}


export function InfoTaskHeader({ tasksCounter, checkedTasksCounter }: InfoTaskHeaderProps) {
  return (
    <div className={styles.infoHeaderTasks}>
      <div className={styles.createCounterTask}>
        <span>Tarefas criadas</span>
        <span className={styles.counter}>{tasksCounter}</span>
      </div>
      <div className={styles.doneCounterTask}>
        <span>Concluídas</span>
        <span className={styles.counter}>
          {tasksCounter === 0
            ? checkedTasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </div>
    </div>
  );
}

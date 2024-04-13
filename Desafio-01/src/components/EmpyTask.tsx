import styles from './EmpyTask.module.css'
import taskEmpy from '../assets/Clipboard.svg'
export function EmpyTask(){
  return(
    <div className={styles.containerEmpyTask}>
          <img src={taskEmpy} alt="vazio" />
          <div className={styles.emptyMessage}>
            <strong>
              <p>Você ainda não tem tarefas cadastradas</p>
            </strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          </div>
  );
}
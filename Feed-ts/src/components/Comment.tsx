import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avartar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  // função para deletar o comentário
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // função para contar o número de likes
  // sempre que uma função depender de um valor anterior , é interecente executar como uma função.
  function handleLikeCommet() {
    setLikeCount(state => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avartar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/99516781?v=4"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Schneider</strong>
              <time
                title="17 de Novembro às 16:00h"
                dateTime="2023-11-17 16:00h"
              >
                1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLikeCommet}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

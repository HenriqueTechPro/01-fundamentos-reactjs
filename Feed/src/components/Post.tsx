import { useState } from "react";
import { Avartar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Um comentário muito bacana?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // Evento que cria um comentário

  const handleClickNewComment = (event) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (event) => {
    event.preventDefault();
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  };

  // Deletar comentários

  function deleteComment(commentsToDelete){
    const commentWithOutDeleteOne = comments.filter(comment => {
      return comment !== commentsToDelete;
    })

   setComments(commentWithOutDeleteOne);
    
  }

  // Tratamento de validação do textarea
  function handleNewCommentInvalid(event){
    event.target.setCustomValidity('Este campo é obrigatório!')
    // setCustomValidity propriedade do tratamento de erro htm, no inspecionar event no console.log(event)
  }

  // caso o textarea esteja vazio

  const isNewCommentEmpy = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avartar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>
              {author.name}
            </strong>
            <span>
              {author.role}
            </span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return (
              <p key={index}>
                {line.content}
              </p>
            );
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#" key={index}>
                  {line.content}
                </a>
              </p>
            );
          }
          return null;
        })}
      </div>

      <form onSubmit={handleClickNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpy}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) =>
          <Comment key={index} content={comment} onDeleteComment={deleteComment} />
        )}
      </div>
    </article>
  );
}

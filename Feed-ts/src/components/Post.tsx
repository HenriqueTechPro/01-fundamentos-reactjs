import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avartar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// criando inteface para tipar os objetos
interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id:number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Um comentário muito bacana?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // Evento que cria um comentário

  const handleClickNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  // Deletar comentários

  function deleteComment(commentsToDelete: string) {
    const commentWithOutDeleteOne = comments.filter(comment => {
      return comment !== commentsToDelete;
    });

    setComments(commentWithOutDeleteOne);
  }

  // Tratamento de validação do textarea
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
    // setCustomValidity propriedade do tratamento de erro htm, no inspecionar event no console.log(event)
  }

  // caso o textarea esteja vazio

  const isNewCommentEmpy = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avartar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>
              {post.author.name}
            </strong>
            <span>
              {post.author.role}
            </span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line, index) => {
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
          <button type="submit" disabled={isNewCommentEmpy}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) =>
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        )}
      </div>
    </article>
  );
}

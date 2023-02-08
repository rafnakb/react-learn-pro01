import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment(props) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log('Deletar!');
    props.onDeleteComment(props.content);
  }

  // This code can be used on the footer button
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="src/assets/avatar-comment-1.svg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Bueno</strong>
              <time title="06 de Fevereiro às 16:30" dateTime="2023-02-06 16:30:25">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}> {/* Or  onClick={() => setLikeCount(likeCount + 1)}  */}
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
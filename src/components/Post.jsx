import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="src/assets/linux-avatar.png" />
          <div className={styles.authorInfo}>
            <strong>Rafael Bueno</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="06 de Fevereiro às 16:30" dateTime="2023-02-06 16:30:25">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p><strong>Usinas solares flutuantes</strong></p>
        <p>
          Plantas instaladas em lagos e represas são alternativa sustentável para elevar a geração de eletricidade no país.
        </p>
        <a href="https://revistapesquisa.fapesp.br/usinas-solares-flutuantes/" target="_blank">
          Veja o artigo completo aqui!
        </a>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
}

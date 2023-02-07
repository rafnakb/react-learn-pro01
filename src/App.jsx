import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://gravatar.com/avatar/4a035c5bda8d7e0effb95550ffbaee3d?s=400&d=robohash&r=x',
      name: 'Liselotte Noel',
      role: 'Manager'
    },
    content: [
      { type: 'paragraph', content: 'Usinas solares flutuantes' },
      { type: 'paragraph', content: 'Plantas instaladas em lagos e represas são alternativa sustentável para elevar a geração de eletricidade no país.' },
      { type: 'link', content: 'https://revistapesquisa.fapesp.br/usinas-solares-flutuantes/' }
    ],
    publishedAt: new Date('2023-02-04 09:03:42')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://gravatar.com/avatar/041e4175925acde6e873c390a25a5e7f?s=400&d=robohash&r=x',
      name: 'Zachary Martin',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'A inteligência artificial chega à saúde' },
      { type: 'paragraph', content: 'Tecnologias dotadas desses recursos já são usadas na área médica, mas desafios precisam ser superados para sua incorporação em maior escala no país.' },
      { type: 'link', content: 'https://revistapesquisa.fapesp.br/a-inteligencia-artificial-chega-a-saude/' }
    ],
    publishedAt: new Date('2023-02-06 11:21:18')
  }
]

export default function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </>
  )
}

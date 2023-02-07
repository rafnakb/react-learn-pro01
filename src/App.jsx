import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

export default function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post></Post>
        </main>
      </div>
    </>
  )
}

import './App.css'
import imagem from './assets/logo.jpg'
export default function App() {
  return (
    <main>
      <header>
        <section id="bar">
        <h1>SCIshare</h1>
        <nav>
          <ul>
            <li><a href="#home">início</a></li>
            <li><a href="#home">secao 1</a></li>
            <li><a href="#home">secao 2</a></li>
            <li><a href="#home">secao 3</a></li>
            <li><a href="#home">contatos</a></li>
          </ul>
        </nav>
        </section>
      <section id="home">
        <img src={imagem} alt="logo csd" />
        lorem ipsum
      </section>
      </header>
      <footer>
        CSD | Todos os direitos reservados (copy)
      </footer>
    </main>
  )
}

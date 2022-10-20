import imagem from './assets/logo.jpg';
import science from './assets/science.svg'
import Widget from './components/Widget';
import './styles/App.css'

export default function App() {
  return (
    <>
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

        <section>
          <div>
            <h2>Método Científico</h2>
            <p>O método científico é um processo rigoroso no qual o cientista analisará o objeto de estudo. Será feito a partir da sequência: observação (reconhecer um problema), pesquisa bibliográfica (coletar o máximo de informações sobre o assunto), hipótese (formular uma possível solução), teste (experimentos que confirmam ou negam a hipótese) e conclusão (desfecho dado a partir dos resultados obtidos).
              Para cada fenômeno ou objeto é necessário um método ideal. Além disso, para as diversas ciências (humanas, sociais, biológicas, etc) podem haver novas necessidades para uma análise teórica ou prática.
              A forma de abordagem pode se quantitativa, se importando apenas com números, ou qualitativa, numa análise subjetiva e interpretativa desses números.
              Em relação aos objetivos, a pesquisa também pode ser classificada em: descritiva (sendo mais objetiva e sistemática), exploratória (pode ser teórica ou através de coleta de dados, entrevistas, opiniões, etc) ou ainda explicativa (busca conhecer o "por que" de uma determinada realidade).</p>
          </div>
          <img src={science} alt="blob" />
        </section>
        <p>Além disso, para além da definição de método científico, podem-se encontrar outras questões no caminho, como, por exemplo, o que dissocia fato, hipótese, lei e teoria. Esse primeiro, o fato, é definido como uma verdade que se repete inúmeras vezes. Vale lembrar que a verdade na ciência existe até que se prove o contrário: o que é um fato hoje pode não ser um fato amanhã. A hipótese é como um fato mais provisório e geralmente é utilizada para explicações de sistemas mais complexos. Sendo assim, é a dedução de algo mais incerto. Já a lei é a descrição de como um aspecto se comporta segundo uma determinada circunstância. E, finalmente, a teoria é uma explicação mais aprofundada sobre algum aspecto que pode conter os fatos, as leis e as hipóteses.</p>

        <footer>
          CSD | Todos os direitos reservados (copy)
        </footer>
      </main>
      <Widget />
    </>
  )
}

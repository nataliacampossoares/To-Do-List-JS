import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <h3>Conteúdo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium distinctio nobis illum rem voluptatum quasi minima eius itaque culpa dolores incidunt voluptate aut iusto dolorem sit, ut suscipit labore?</p>
      </Main>
      <Footer autor="Nati"/>
    </>
  );
}

export default App
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./App.module.css"
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <Main>
        <form action="">
          <input type="text" />
          <button>+</button>
        </form>
        <TaskList></TaskList>
      </Main>
      <Footer autor="Nati"/>
    </div>
  );
}

export default App
import TaskItem from "./TaskItem/TaskItem"
import styles from "./TaskList.module.css"

function TaskList() {

    const listaTarefas = [
        {id: 1, tarefa: "Estudar"},
        {id: 2, tarefa: "Lavar a louça"},
        {id: 3, tarefa: "Ir à academia"}
    ]

    const getItens = () => {
        const lista = [
            <TaskItem texto="item 1"/>,
            <TaskItem texto="item 2"/>,
            <TaskItem texto="item 3"/>
        ]
    }

    return (
        <ul className={styles.TaskList}>

        <TaskItem texto={listaTarefas[0].tarefa}/>
        <TaskItem texto={listaTarefas[1].tarefa}/>
        <TaskItem texto={listaTarefas[2].tarefa}/>

        </ul>
    )
}

export default TaskList
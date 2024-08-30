import styles from './TaskItem.module.css'

function TaskItem(props) {

    const { texto } = props

    return (
            <li className = {styles.TaskItem}>
                {texto}
                <span>X</span>
          </li>

    )
}
export default TaskItem
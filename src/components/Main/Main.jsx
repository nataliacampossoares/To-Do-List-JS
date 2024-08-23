import styles from './Main.module.css'

function Main(props) {
    
    const {children} = props

    return (
        <div className = {styles.Main}>
            {children}
        </div>
    )
}
export default Main
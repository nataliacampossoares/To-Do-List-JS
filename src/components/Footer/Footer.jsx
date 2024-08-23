import styles from './Footer.module.css'

function Footer(props) {

    let {autor} = props
    let ano = new Date().getFullYear()

    return (
        <div className = {styles.Footer}>
            React - { autor } - { ano }
        </div>
    )
}
export default Footer
import styles from './ControlPanel.module.css'

const ControlPanel = (props) => {
    return(
        <section className={styles.container}>
            { props.children }
        </section>
    )
}

export default ControlPanel;
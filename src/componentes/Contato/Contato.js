import Formulario from 'componentes/Formulario'
import styles from './Contato.module.sass'

export const Contato = () => {
    return (
        <section className={styles.contato}>
            <div className={styles.contato__titulo}>
                <h2>Contato</h2>
            </div>
            <div className={styles.contato__formContato}>
                <Formulario />
            </div>
        </section>
    )
}

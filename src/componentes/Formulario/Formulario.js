import styles from './Formulario.module.sass'

export const Formulario = () => {
    return (
        <section className={styles.formulario}>
            <form>
                    <label>Nome</label>
                    <input type='text' name='from_name' placeholder='Digite seu nome...'></input>
                
                
                    <label>Email</label>
                    <input type='text' name='user_email' placeholder='Digite seu email...'></input>
                
                
                    <label>Mensagem</label>
                    <textarea name='message' rows='5' placeholder='Digite sua mensagem...'></textarea>
                
                    <button type='submit' value='Submit'>Enviar</button>

            </form>
        </section>
    )
}

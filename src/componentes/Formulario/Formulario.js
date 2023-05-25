import { useState } from 'react';
import styles from './Formulario.module.sass'
import emailjs from 'emailjs-com';

export const Formulario = () => {

    const [nome, setNome]         = useState('')
    const [email, setEmail]       = useState('')
    const [mensagem, setMensagem] = useState('')

    const aoDigitarNome = (e) => {
       setNome(e.target.value)
    }

    const aoDigitarEmail = (e) => {
        setEmail(e.target.value)
     }

     const aoDigitarMsg = (e) => {
        setMensagem(e.target.value)
     }

    function enviarEmail(e){
        e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_USER_ID
           )
           .then((result) => {
               alert('Sua mensagem foi enviada com sucesso.');
             }, (error) => {
                alert('Sua mensagem não pode ser entregue: ' + error.text);
           });

           setNome('')
           setEmail('')
           setMensagem('')

    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={enviarEmail}>
                    <label>Nome</label>
                    <input 
                        type='text' 
                        name='from_name' 
                        placeholder='Digite seu nome...' 
                        onChange={aoDigitarNome}
                        value={nome}
                    />
                    <label>Email</label>
                    <input 
                        type='text' 
                        name='user_email' 
                        placeholder='Digite seu email...'
                        onChange={aoDigitarEmail}
                        value={email} 
                    />
                    <label>Mensagem</label>
                    <textarea 
                        name='message' 
                        rows='5' 
                        placeholder='Digite sua mensagem...'
                        onChange={aoDigitarMsg}
                        value={mensagem}
                    />
                    <button type='submit' value='Submit'>Enviar</button>

            </form>
        </section>
    )
}

import styles from './Projeto.module.sass'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'


export const Projeto = (props) => {

    const [repositorio, setRepositorio] = useState('')
    const [htmlUrl, setHtmlUrl]         = useState('')
    const [demo, setDemo]               = useState('')

    async function repoGit(repositorio) {
        const resposta = await fetch (`https://api.github.com/repos/donmedina/${repositorio}`)
        const cResposta = await resposta.json()
        setRepositorio(cResposta['full_name'])
        setHtmlUrl(cResposta['html_url'])
        setDemo(cResposta['homepage'])
      }
    
    repoGit(props.repositorio)

    return (
        <div className={styles.projeto__conteudo}>
            <img src={props.imagem} alt='foto do ultimo projeto' />
            <div className={styles.projeto__conteudo_repositorio}>
                <h2 className={styles.projeto__conteudo_repositorio__h2Nome}>{props.nome}</h2>
                <h2 className={styles.projeto__conteudo_repositorio__h2Repo}>Repositorio: {repositorio}</h2>
                <div>
                    <a href={htmlUrl} target='__blank'><AiFillGithub size={18} style={{marginRight:'6px'}}/>Code</a>
                    <a href={demo} target='__blank'>Demo</a>
                </div>
            </div>
        </div>
    )
}

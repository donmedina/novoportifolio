import styles from './LastProjects.module.sass'
import fotoProjeto from './projeto.png'
import { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

export const LastProjects = () => {

    const [nome, setNome]       = useState('')
    const [htmlUrl, setHtmlUrl] = useState('')
    const [demo, setDemo]   = useState('')

    async function repoGit(repositorio) {
        const resposta = await fetch (`https://api.github.com/repos/donmedina/${repositorio}`)
        const cResposta = await resposta.json()
        setNome(cResposta['name'])
        setHtmlUrl(cResposta['html_url'])
        setDemo(cResposta['homepage'])
      }
    
    repoGit('protocolo_pollock')

    return (
        <section className={styles.lastprojects}>
            <div className={styles.lastprojects__titulo}>
                <h2>Últimos projetos</h2>
            </div>
            <div className={styles.lastprojects__conteudo}>
                <div>
                    <img src={fotoProjeto} alt='foto do ultimo projeto' />
                </div>
                <div>
                    <h2>{nome}</h2>
                    <a href={htmlUrl} target='__blank'><AiFillGithub size={18} style={{marginRight:'6px'}}/>Code</a>
                    <a href={demo} target='__blank'>Demo</a>
                </div>
            </div>
        </section>
    )
}

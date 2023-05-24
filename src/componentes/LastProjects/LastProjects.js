import Projeto from 'componentes/Projeto'
import styles from './LastProjects.module.sass'


export const LastProjects = () => {

    const repos = [{
        nome: 'Ficha de Avaliação Física',
        repositorio: 'protocolo_pollock',
        imagem: 'imagens/protocolo_pollock.png'
    },
    {
        nome:'Lista de Desejos',
        repositorio: 'lista_desejo',
        imagem: 'imagens/lista_desejo.png'
    }]


    return (
        <section className={styles.lastprojects}>
            <div className={styles.lastprojects__titulo}>
                <h2>Últimos projetos</h2>
            </div>
            <div className={styles.lastprojects__projeto}>
                {repos.map(projeto => <Projeto 
                    key={projeto.repositorio}
                    nome={projeto.nome}
                    repositorio={projeto.repositorio}
                    imagem={projeto.imagem} />)}
            </div>
        </section>
    )
}

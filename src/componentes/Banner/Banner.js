import styles from './Banner.module.sass'
import topBanner from './banner.png'
import Links from '../Links'


export const Banner = () => {
    return (
        <section className={styles.banner}>

            <div className={styles.banner__imagemFundo}>
                <img src={topBanner} alt='Banner'/>
            </div>
            <div className={styles.banner__info}>
                <div>
                    <h2>Gabriel Medina</h2>
                    <h3>Frontend e backend developer</h3>
                    <p>Graduação em tecnologia em informática - 2005;<br/>
                    Graduação em Publicidade e Propaganda - 2015 ;<br/>
                    MBA em Marketing - 2017. <br/>
                    Experiência em de banco d dados SQL e <br/>desenvolvendo aplicações em PHP e planilhas automatizadas em VBA.</p><br/>
                    <Links />
                </div>
                <img src='https://github.com/donmedina.png' alt='Imagem de perfil'/>
            </div>

        </section>
    )
}

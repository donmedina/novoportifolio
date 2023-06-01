import BtnPrincipal from 'componentes/BtnPrincipal'
import styles from './PostCard.module.sass'

export const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
            <img src={post.capa} alt='Capa do post' className={styles.capa} />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <BtnPrincipal ler={post.link}>
                Ler
            </BtnPrincipal>
        </div>
    )
}

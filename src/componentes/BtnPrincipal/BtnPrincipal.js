import styles from './BtnPrincipal.module.sass'

export const BtnPrincipal = ({children, ler}) => {
    return (
        <a className={styles.botao} href={ler} target='__blank' >
            {children}
        </a>
    )
}

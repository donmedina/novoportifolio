import MenuLink from 'componentes/MenuLink'
import styles from './NavBar.module.sass'

export const NavBar = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/' >
                    Inicio
                </MenuLink>
                <MenuLink to="/posts">
                    Artigos
                </MenuLink>
            </nav>
        </header>
    )
}

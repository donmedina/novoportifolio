import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.sass'

export const MenuLink = ({ children, to }) => {
    const loc = useLocation();
    return (
        <Link
            className={`
            ${styles.link} 
            ${loc.pathname === to ? styles.linkDestaque : ""}`}
            to={to}> {children} </Link>
    )
}

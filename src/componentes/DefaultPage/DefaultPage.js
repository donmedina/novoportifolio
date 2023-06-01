import Banner from 'componentes/Banner'
import styles from './DefaultPage.module.sass'
import { Outlet } from 'react-router-dom'

export const DefaultPage = () => {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}

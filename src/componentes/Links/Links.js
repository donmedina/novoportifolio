import styles from './Links.module.sass'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Links = () => {
    return (
        <div className={styles.links}>                   
            <a className={styles.links__git} href='https://twitter.com/donmedinarj' target='__blank'>
                <AiFillGithub size={40} style={{marginRight:'12px'}} /> Github</a>
            <a className={styles.links__lk}href='https://www.linkedin.com/in/gmcsrj/' target='__blank'>
                <AiFillLinkedin size={40} style={{marginRight:'12px'}}/> Linkedin</a>
        </div>
    )
}

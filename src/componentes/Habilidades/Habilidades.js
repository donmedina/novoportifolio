import styles from './Habilidades.module.sass'
import { AiFillHtml5 } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiCss3, SiBootstrap } from 'react-icons/si'
import { FaSass, FaReact } from 'react-icons/fa'

export const Habilidades = () => {
    const padIcons = {padding:'12px'}
    return (
        <div className={styles.icones}>
            <AiFillHtml5 size={66} style={padIcons} />
            <TbBrandJavascript size={68} style={padIcons}/>
            <SiCss3 size={56} style={padIcons} />
            <SiBootstrap size={64} style={padIcons} />
            <FaSass size={60} style={padIcons} />
            <FaReact size={60} style={padIcons} />
        </div>
    )
}

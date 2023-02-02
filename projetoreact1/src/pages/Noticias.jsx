import Noticia  from "../components/Noticia";
import styles from '../css/Noticias.module.css'
export default function Noticias(){
    return(
        < div className="container">
            <div className={styles.noticias}>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
            <Noticia/>
        </div>
        </div>
    );
}
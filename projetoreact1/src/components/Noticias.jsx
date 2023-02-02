import Noticia from './Noticia'
import styles from './Noticias.module.css'
import { Link } from 'react-router-dom';
export default function Noticias(){
    return(
        <article className={styles.art}>
            <h1>Notícias</h1>
            <div className={styles.noticias}>
                <Noticia/>
                <Noticia/>
                <Noticia/>
            </div>
            <Link to='noticias' className={styles.button}>Ver mais notícias</Link>
        </article>
    );
}

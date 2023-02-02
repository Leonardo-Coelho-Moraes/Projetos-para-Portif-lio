import style from './Noticias.module.css'
import { Link } from 'react-router-dom';
export default function Noticia(){
    return(
        <Link to='/' className={style.noticia}>
            <span className={style.legendanot}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className={style.datanot}>Postado em 00/00/00</span>
            </span>
         </Link>
    );
}

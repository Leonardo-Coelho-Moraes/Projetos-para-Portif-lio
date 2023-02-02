
import styles from '../css/Home.module.css'
import Noticias from '../components/Noticias'
import Cursos from './Cursos'
import React from 'react'
export default function Home(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                
                <div className='container'>
                    <h1>Helcy Moreira Martins Aguiar</h1>
                    <p >Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo constantemente menções e congratulações em todo o estado de São Paulo.</p>
                </div>
                <div className={styles.comp}>
                    <span className={styles.span1}>Mantida pelo governo do Estado de São Paulo, os cursos oferecidos – além de qualidade ímpar – são totalmente gratuitos, levando para toda a população um ensino de qualidade e a oportunidade deaprender uma profissão.</span>
                    <span  className={styles.span2}>Contando com um corpo docente extremamente qualificado e estrutura física moderna, os cursosoferecidos nesta unidade se destacam pelaqualidade de ensino, onde o aluno realmente aprende conteúdos relevantes, de maneira fácil e didática. </span>
                    <span  className={styles.span3}>Baseado  em uma didática prática, os alunos são envolvidos em conteúdos que abordam as diversas realidades do mercado, formando assim mão de obra qualificada e proporcionando uma experiência diferenciada para o aluno.</span>
                 </div>
            </section>
            <Cursos/>
            <section className={styles.section3}>
                <div className={styles.empregofoto} id='empregofoto'>
                    <h1>Estágios e empregos</h1>
                </div>
                <div className={styles.empregos}>
                    
                    <h3 onMouseEnter={muda} >Lorem ipsum dolor sit amet <span>Publicado em 00/00/2000</span><a href='#'>Mais mais sobre a vaga</a></h3>
                    <h3 onMouseEnter={muda2} >Lorem ipsum dolor sit amet <span>Publicado em 00/00/2000</span><a href='#'>Mais mais sobre a vaga</a></h3>
                    <h3 onMouseEnter={muda3} >Lorem ipsum dolor sit amet <span>Publicado em 00/00/2000</span><a href='#'>Mais mais sobre a vaga</a></h3>
                </div>
            </section>
            <Noticias/>
           
        </React.Fragment>
    );
    
};
 function muda(){
    const emprego = document.querySelector('#empregofoto')
        emprego.style.background = '#B91C1C'
 };
 function muda2(){
    const emprego = document.querySelector('#empregofoto')
        emprego.style.background = '#481A8F'
 };
 function muda3(){
    const emprego = document.querySelector('#empregofoto')
        emprego.style.background = '#111827'
 };

import { Link, useParams } from 'react-router-dom';
import cursos from '../data';
const CursoSolo = () => {
  const { cursoId } = useParams();
  const curso = cursos.find((curso) => curso.id === cursoId);
  const { image, name } = curso;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/cursos'>back to products</Link>
    </section>
  );
};

export default CursoSolo;
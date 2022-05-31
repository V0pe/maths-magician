import { Link } from 'react-router-dom';
import Calculator from '../components/Calculator';

export default function About() {
  return (
    <>
      <section>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don&#39;t you
          think?
        </p>
        <Calculator />
      </section>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

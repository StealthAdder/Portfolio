import styles from '../styles/card.module.css';
import { data } from '../constant/data';
import Container from './Container';
const Projects = () => {
  return (
    <>
      <h4 className={styles.pageTitle}>Projects</h4>
      <div className={styles.wrapperGrid}>
        {data.map((game) => (
          <Container
            image={game.image}
            title={game.title}
            url={game.url}
            desc={game.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

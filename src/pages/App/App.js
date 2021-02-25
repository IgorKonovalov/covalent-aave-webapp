import styles from './App.module.scss';
import { Input } from '../../components';

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <p>
          Covalent-Aave webapp test
        </p>
        <Input
          name="search"
          label="search"
        />
      </header>
    </div>
  );
}

export default App;

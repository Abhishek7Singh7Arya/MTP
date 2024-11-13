import styles from './styles/App.module.css'
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>VectorShift Workflow</h1>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;

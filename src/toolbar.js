// toolbar.js
import styles from './styles/toolbar.module.css';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className={styles.toolbarContainer}>
            {/* <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}> */}
            <div className={styles.nodeWrapper}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='apiCall' label='API' />
                <DraggableNode type='calculator' label='Calculator' />
                <DraggableNode type='decision' label='Decision' />
                <DraggableNode type='imageProcessor' label='Image' />
                <DraggableNode type='logger' label='Logger' />
                {/* <DraggableNode type='fileLoader' label='FileLoader'/> */}
            </div>
        </div>
    );
};

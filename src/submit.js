// submit.js
import styles from './styles/submitButton.module.css';
import {useStore} from './store';

export const SubmitButton = () => {
    //Retrieve nodes and edges from the store
    const nodes = useStore((state)=>state.nodes);
    const edges = useStore((state)=>state.edges);

    const submitPipeline = async(nodes,edges)=>{
        try{
            const response = await fetch('http://localhost:8000/pipelines/parse',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({nodes,edges}),
            });
            if(!response.ok){
                throw new Error("Failed to submit pipeline");
                console.log( " number of nodes and edges", useStore.nodes,"  ", useStore.edges);
            }
            const data = await response.json();

            alert(
                `Pipeline Analyis:\n Number of Nodes ${data.num_nodes} \n NUmber of Edges:
                ${data.num_edges}\n Is DAG: ${data.is_dag? 'Yes':'No'}`
            );
        }
        catch(error){
            console.error('Error:',error);
            alert("An error occurred while submitting the pipeline.");

        }
            
            console.log( " number of nodes and edges",nodes ,edges);
    };  

    // console.log( " number of nodes and edges", useStore.nodes,"  ", useStore.edges);
    return (
        <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} 
            type="submit"
            onClick={()=>submitPipeline(nodes,edges)}// Pass nodes and edges to submitPipeline
            >Submit</button>
        </div>
    );
}

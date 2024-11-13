// textNode.js

import { useState, useEffect, useRef } from "react"; // Import useRef
import { Handle, Position } from "reactflow";
import styles from "../styles/textNode.module.css";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [dimensions, setDimensions] = useState({ width: "100%", height: "100%" });
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null); // Create a ref for the textarea

  useEffect(() => {
    const textarea = textareaRef.current; // Get the textarea from the ref
    // Function to auto-resize textarea based on content  
    const handleInput = () => {
      textarea.style.height = 'auto'; // Reset height to auto to calculate new height    
      textarea.style.height = textarea.scrollHeight + 'px'; // Set height based on scrollHeight
    };

    textarea.addEventListener('input', handleInput);

    // Cleanup function to remove the event listener
    return () => {
      textarea.removeEventListener('input', handleInput);
    };
  }, []); // Empty dependency array to run only on mount

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    extractVariables(newText);
  };

  const extractVariables = (text) => {
    const variableRegex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
    const foundVariables = [];
    let match;

    while ((match = variableRegex.exec(text)) !== null) {
      console.log(match[1]);
      foundVariables.push(match[1]);
    }
    console.log(foundVariables, " hello");
    setVariables(foundVariables);
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "16px Arial"; // Adjust font size as needed
    const textWidth = context.measureText(currText).width;

    setDimensions({
      width: "100%",
      height: "100%",
    });
  }, [currText]);

  return (
    <div
      style={{
        width: dimensions.width,
        height: dimensions.height,
        border: "1px solid black",
        padding: "10px",
        position: "relative",
      }}
    >
      <div>
      </div>
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef} // Attach the ref to the textarea
            className="auto-resize-textarea"
            type="text"
            value={currText}
            onChange={handleTextChange}
            style={{ width: "100%", "max-width": "200%", height: "100%", resize: "none", overflow: "hidden" }}
          />
        </label>
      </div>
      {variables.map((variable, index) => (
        <>
          <div style={{ position: "absolute", right: "105%", top: `${40 + index * 30}%` }}>
            <span style={{ fontSize: "12px", color: "gray", opacity: 0.7 }}>{variable}</span>
          </div>
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`${id}-input-${variable}`}
            // className={styles.handlelabel}
            // data-label={`${variable}`}
            style={{ top: `${50 + index * 30}%` }}
          />
        </>
      ))} <Handle type="target" position={Position.left} id={`${id}-output`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
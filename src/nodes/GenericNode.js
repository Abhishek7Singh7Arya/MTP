// GenericNode.js

import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import style from '../styles/node.module.css';
export const GenericNode = ({ id, title, fields = [], handles = [] }) => {
  const [fieldValues, setFieldValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || '' }), {})
  );

  const handleFieldChange = (name, value) => {
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={style.outerBox} style={{ width: 200 , padding: 10 }}>
      <div>
        <span className={style.titleStyle}>{title}</span>
      </div>
      <div>
        {fields.map((field) => (
          <label className={style.labelStyle} key={field.name}>
            {field.label}:
            {field.type === 'select' ? (
              <select
                value={fieldValues[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input 
              className ={style.textAreaStyle}
                type="text"
                value={fieldValues[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
              />
            )}
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={Position[handle.position]}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};

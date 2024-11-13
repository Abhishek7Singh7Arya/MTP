// GenericNode.js

import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const GenericNode = ({ id, title, fields = [], handles = [] }) => {
  const [fieldValues, setFieldValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || '' }), {})
  );

  const handleFieldChange = (name, value) => {
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ width: 200 , padding: 10, border: '1px solid black' }}>
      <div>
        <span>{title}</span>
      </div>
      <div>
        {fields.map((field) => (
          <label key={field.name}>
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

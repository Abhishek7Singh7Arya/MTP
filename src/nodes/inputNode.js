// inputNode.js

import { GenericNode } from './GenericNode';

export const InputNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Input"
      fields={[
        { name: 'inputName', label: 'Name', type: 'text', defaultValue: data?.inputName || id },
        { name: 'inputType', label: 'Type', type: 'select', options: ['Text', 'File'], defaultValue: data?.inputType || 'Text' }
      ]}
      handles={[
        { id: 'value', type: 'source', position: 'Right' }
      ]}
    />
  );
};

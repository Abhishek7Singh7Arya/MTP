// outputNode.js

import { GenericNode } from './GenericNode';

export const OutputNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Output"
      fields={[
        { name: 'outputName', label: 'Name', type: 'text', defaultValue: data?.outputName || id },
        { name: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'], defaultValue: data?.outputType || 'Text' }
      ]}
      handles={[
        { id: 'value', type: 'target', position: 'Left' }
      ]}
    />
  );
};

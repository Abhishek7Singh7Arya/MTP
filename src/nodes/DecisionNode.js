// DecisionNode.js

import { GenericNode } from './GenericNode';

export const DecisionNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Decision"
      fields={[
        { name: 'condition', label: 'Condition', type: 'text', defaultValue: 'value > 10' }
      ]}
      handles={[
        { id: 'input', type: 'target', position: 'Left' },
        { id: 'truePath', type: 'source', position: 'Right', style: { top: '33%' } },
        { id: 'falsePath', type: 'source', position: 'Right', style: { top: '66%' } }
      ]}
    />
  );
};

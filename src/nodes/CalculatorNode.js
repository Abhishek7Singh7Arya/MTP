// CalculatorNode.js

import { GenericNode } from './GenericNode';

export const CalculatorNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Calculator"
      fields={[
        { name: 'operand1', label: 'Operand 1', type: 'text', defaultValue: '0' },
        { name: 'operand2', label: 'Operand 2', type: 'text', defaultValue: '0' },
        { name: 'operation', label: 'Operation', type: 'select', options: ['+', '-', '*', '/'], defaultValue: '+' }
      ]}
      handles={[
        { id: 'input', type: 'target', position: 'Left' },
        { id: 'result', type: 'source', position: 'Right' }
      ]}
    />
  );
};

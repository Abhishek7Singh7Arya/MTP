// llmNode.js

import { GenericNode } from './GenericNode';

export const LLMNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="LLM"
      fields={[]}
      handles={[
        { id: 'system', type: 'target', position: 'Left', style: { top: '33%' } },
        { id: 'prompt', type: 'target', position: 'Left', style: { top: '66%' } },
        { id: 'response', type: 'source', position: 'Right' }
      ]}
    />
  );
};

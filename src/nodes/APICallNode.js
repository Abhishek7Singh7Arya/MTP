// APICallNode.js

import { GenericNode } from './GenericNode';

export const APICallNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="API Call"
      fields={[
        { name: 'endpoint', label: 'Endpoint URL', type: 'text', defaultValue: 'https://api.example.com' },
        { name: 'method', label: 'Method', type: 'select', options: ['GET', 'POST', 'PUT', 'DELETE'], defaultValue: 'GET' }
      ]}
      handles={[
        { id: 'request', type: 'target', position: 'Left' },
        { id: 'response', type: 'source', position: 'Right' }
      ]}
    />
  );
};

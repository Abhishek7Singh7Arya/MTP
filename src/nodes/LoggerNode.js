// LoggerNode.js

import { GenericNode } from './GenericNode';

export const LoggerNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Logger"
      fields={[
        { name: 'logLevel', label: 'Log Level', type: 'select', options: ['Info', 'Warning', 'Error'], defaultValue: 'Info' },
        { name: 'message', label: 'Message', type: 'text', defaultValue: 'Log this message' }
      ]}
      handles={[
        { id: 'input', type: 'target', position: 'Left' }
      ]}
    />
  );
};

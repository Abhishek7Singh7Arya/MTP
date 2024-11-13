// ImageProcessorNode.js

import { GenericNode } from './GenericNode';

export const ImageProcessorNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      title="Image Processor"
      fields={[
        { name: 'filter', label: 'Filter', type: 'select', options: ['Grayscale', 'Sepia', 'Invert'], defaultValue: 'Grayscale' },
        { name: 'intensity', label: 'Intensity', type: 'text', defaultValue: '50' }
      ]}
      handles={[
        { id: 'inputImage', type: 'target', position: 'Left' },
        { id: 'outputImage', type: 'source', position: 'Right' }
      ]}
    />
  );
};

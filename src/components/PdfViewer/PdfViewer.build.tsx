import { FC } from 'react';
import cn from 'classnames';
import { IPdfViewerProps } from './PdfViewer.config';
import { useEnhancedNode } from '@ws-ui/webform-editor';
import { FaFilePdf } from 'react-icons/fa'; // Importing file icon from react-icons/fa

const PdfViewer: FC<IPdfViewerProps> = ({ pdfLink, style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      {pdfLink ? (
        <div className="flex items-center">
          <FaFilePdf className="mr-2" /> PDF File...
        </div>
      ) : (
        <div>No files to display...</div>
      )}
    </div>
  );
};

export default PdfViewer;

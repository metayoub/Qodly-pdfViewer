import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import { IPdfViewerProps } from './PdfViewer.config';
import { useRenderer, useSources } from '@ws-ui/webform-editor';

const PdfViewer: FC<IPdfViewerProps> = ({ pdfLink, style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [_value, setValue] = useState(() => pdfLink);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v || pdfLink);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      {pdfLink ? (
       <div className="w-full h-full border border-gray-300">
       <iframe
         title="PDF Viewer"
         src={`https://docs.google.com/viewer?url=${pdfLink}&embedded=true`}
         className="w-full h-full border-none"
       ></iframe>
     </div>
     
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          No files to display...
        </div>
      )}
    </div>
  );
};

export default PdfViewer;

import config, { IPdfViewerProps } from './PdfViewer.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './PdfViewer.build';
import Render from './PdfViewer.render';

const PdfViewer: T4DComponent<IPdfViewerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

PdfViewer.craft = config.craft;
PdfViewer.info = config.info;
PdfViewer.defaultProps = config.defaultProps;

export default PdfViewer;

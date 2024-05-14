import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'pdfLink',
    label: 'pdfLink',
    type: ESetting.TEXT_FIELD,
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },

  ...load(DEFAULT_SETTINGS).filter('style.overflow', 'background', 'color', 'font'),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow', 'background', 'color', 'font'),
];

export default Settings;

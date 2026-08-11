import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  cigarSidebar: [
    'intro',
    {
      type: 'category',
      label: '導入ガイド',
      collapsed: false,
      items: ['installation', 'basic-usage', 'cigar-settings'],
    },
  ],
};

export default sidebars;

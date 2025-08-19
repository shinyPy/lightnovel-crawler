import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const appTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: '#1d6a3c',
    colorBgLayout: '#1c1c1c',
  },
  components: {
    Menu: {
      iconSize: 16,
      collapsedIconSize: 14,
      itemHoverBg: '#1d1d1d',
      colorPrimary: '#a9d134',
      subMenuItemBg: 'transparent',
    },
    Typography: {
      colorLink: '#8dc5f8',
      colorLinkHover: '#cda8f0',
      colorLinkActive: '#7f9ef3',
    },
  },
};

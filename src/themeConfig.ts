import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

//Doc https://ant.design/docs/react/customize-theme

export const lightTheme = {
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#1890ff',
    colorBgContainer: '#ffffff',
    colorText: '#000000',
    colorBorder: '#d9d9d9',
    fontSize: 14,
    fontFamily: 'Arial, sans-serif',
  },
};

export const darkTheme = {
  algorithm: darkAlgorithm,
  token: {
    colorPrimary: '#1d39c4',
    colorBgContainer: '#141414',
    colorText: '#ffffff',
    colorBorder: '#434343',
    fontSize: 14,
    fontFamily: 'Arial, sans-serif',
  },
};

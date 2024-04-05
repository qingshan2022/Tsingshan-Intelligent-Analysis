import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '青山工作室出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '青山智能分析平台',
          title: '青山智能分析平台',
          href: 'https://github.com/qingshan2022',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/qingshan2022',
          blankTarget: true,
        },
        {
          key: '水星智慧平台',
          title: '水星智慧平台',
          href: 'https://github.com/qingshan2022',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

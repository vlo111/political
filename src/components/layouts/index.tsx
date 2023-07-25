import { Layout as LayoutComponent } from 'antd';
import styled from 'styled-components';
import { ArticleWrapper } from 'context/wrapper';
import { Header } from '../headers';
import { HeaderArticle } from '../headers/article';
import { Tags } from '../tags';

const Layout = styled(LayoutComponent)`
  background: white;
`;

const { Content: ContentComponent } = LayoutComponent;

const Content = styled(ContentComponent)`
  margin: 0 auto;
`;

export const HomeLayout = () => {
  return (
    <Layout>
      <Header />
      <HeaderArticle />
      <Content>
        <Tags />
        <ArticleWrapper />
      </Content>
    </Layout>
  );
};

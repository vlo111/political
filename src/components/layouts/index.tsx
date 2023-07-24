import { Layout as LayoutComponent } from 'antd';
import styled from 'styled-components';
import { ArticleWrapper } from 'context/wrapper';
import { Header } from '../headers';
import { HeaderArticle } from '../headers/article';

const Layout = styled(LayoutComponent)`
  background: white;
`;

const { Content: ContentComponent } = LayoutComponent;

const Content = styled(ContentComponent)`
  padding: 0 50px;
  margin: 0 auto;
`;

export const HomeLayout = () => {
  return (
    <Layout>
      <Header />
      <HeaderArticle />
      <Content>
        <div style={{ background: 'red' }}>tags</div>
        <ArticleWrapper />
      </Content>
    </Layout>
  );
};

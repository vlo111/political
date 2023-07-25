import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../helpers/constants';
import HeaderArticleUrl from 'components/icons/article.png';
import { useGetHeaderArticle } from '../../api/article/use-get-header-article';

const Wrapper = styled.div`
  background: ${COLORS.PRIMARY.ORANGE};
  height: 35vh;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 30vw;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderArticle = () => {
  const { data } = useGetHeaderArticle({});

  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <Wrapper>
      <div>
        <Row>
          <Col span={24}>
            <h3>{data?.title}</h3>
          </Col>
          <Col span={24}>
            <strong>{data?.description}</strong>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div>
        <img src={HeaderArticleUrl} alt="general article image" />
      </div>
    </Wrapper>
  );
};

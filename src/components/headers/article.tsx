import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../helpers/constants';
import HeaderArticleUrl from 'components/icons/article.png';

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
  return (
    <Wrapper>
      <div>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
      <div>
        <img src={HeaderArticleUrl} alt="general article image" />
      </div>
    </Wrapper>
  );
};

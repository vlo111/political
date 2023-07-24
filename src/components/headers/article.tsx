import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../helpers/constants';

const RowWrapper = styled(Row)`
  background: ${COLORS.PRIMARY.ORANGE};
  height: 25vh;
  padding: 1rem;
`;
export const HeaderArticle = () => {
  return (
    <RowWrapper>
      <Col span={16}>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Col>
      <Col span={8}>2</Col>
    </RowWrapper>
  );
};

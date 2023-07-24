import { Col, Layout as LayoutComponent, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from 'components/logo';
import { COLORS } from 'helpers/constants';

const { Header: HeaderComponent } = LayoutComponent;

const Wrapper = styled(HeaderComponent)`
  && {
    background: transparent;

    .ant-row {
      .ant-col {
        display: flex;
        align-items: center;
        transition: all ease 0.2s;

        &:last-child {
          border-left: 1px solid ${COLORS.SEARCH.BORDER};
          padding: 1rem;
          cursor: pointer;

          &:hover {
            transform: translateY(5px);
            box-shadow: inset 0 10px 20px 2px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }

    a {
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const Header = () => {
  const style = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? COLORS.MENU.ACTIVE : COLORS.MENU.NOT_ACTIVE,
  });

  return (
    <Wrapper>
      <Row>
        <Col span={4}>
          <Logo />
        </Col>
        <Col span={16}>
          <Menu>
            <NavLink to="/" style={style}>
              Հիմնական
            </NavLink>
            <NavLink to="/models" style={style}>
              Մոդելավորում
            </NavLink>
            <NavLink to="/resources" style={style}>
              Ռեսուրսներ
            </NavLink>
          </Menu>
        </Col>
        <Col span={4}>Search</Col>
      </Row>
    </Wrapper>
  );
};

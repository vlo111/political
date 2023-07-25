import { Pagination, PaginationProps } from 'antd';
import { MenuText } from 'components/typography';
import { COLORS } from 'helpers/constants';
import styled from 'styled-components';

const PaginationStyle = styled(Pagination)`
  & {
    display: flex;
    justify-content: end;
    padding: 24px;

    .ant-pagination-item {
      display: none;
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(219, 219, 219, 0.38);
      pointer: cursor;
    }
  }
`;

export const HomePagination = (props: PaginationProps) => {
  return (
    <PaginationStyle
      showTotal={(total, range) => (
        <>
          <MenuText strong color={COLORS.PRIMARY.ORANGE}>{`${range[0]}-${range[1]}`}</MenuText>
          <MenuText color={COLORS.PRIMARY.ORANGE}>{` of ${total}`}</MenuText>
        </>
      )}
      {...props}
    />
  );
};

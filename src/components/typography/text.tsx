import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, screenSize } from '../../helpers/constants';

const { Text: TextComponent } = Typography;

export const textSizeMedia = css`
  @media (max-width: ${screenSize.xxl}) {
    font-size: 15px;
    line-height: 1.3;
  }
`;

export const textStyles = css`
  font-weight: 600;
  letter-spacing: 0.07em;
  ${textSizeMedia}
`;

type TextStyleProps = TextProps & {
  color?: string;
};

export const Text = styled(
  forwardRef<HTMLSpanElement, TextStyleProps>(({ color, ...props }, ref) => <TextComponent {...props} ref={ref} />)
)`
  && {
    ${textStyles};
    color: ${(props) => props.color || COLORS.PRIMARY.GRAY_DARK};
  }
`;

export const MenuText = styled(Text)`
  && {
    font-weight: 500;

    ${(props) =>
      props.strong
        ? css`
            &.ant-typography strong {
              font-weight: 700;
            }
          `
        : ''}
  }
`;

export const SecondaryText = styled(({ color, ...props }) => <Text type="secondary" {...props} />)`
  && {
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.color || '#424242'};

    @media (max-width: ${screenSize.xxl}) {
      font-size: 14px;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`;

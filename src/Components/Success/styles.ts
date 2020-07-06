import styled from 'styled-components';
import { darken } from 'polished';

interface SuccessProps {
  visible: boolean;
}

export const Wrapper = styled.div<SuccessProps>`
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 10px;
    font-size: 72px;
    line-height: 84px;
    text-align: center;
    color: #12a454;
  }
`;

export const Buttons = styled.div`
  display: flex;

  a {
    text-decoration: none;
    display: flex;
    margin-top: 50px;
    background: #ed1236;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #fff;

    & + a {
      margin-left: 20px;
    }

    span {
      margin-left: 10px;
    }

    &:hover {
      background: ${darken(0.03, '#ed1236')};
    }
  }
`;

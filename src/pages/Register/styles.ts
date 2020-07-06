import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #363f5f;
    text-align: center;
  }

  form {
    margin: 40px auto;
    padding: 64px;
    max-width: 730px;
    background: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    fieldset {
      min-inline-size: auto;
      border: 0;

      legend {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h2 {
          font-size: 18px;
          font-weight: 500;
          color: #ed1236;
        }
      }
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    color: #afafaf;
  }

  input {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 20px 24px;
    font-size: 16px;
    color: #6c6c80;

    option:hover {
      flex: 1;
      background: #f0f0f5;
      border-radius: 8px;
      border: 0;
      padding: 20px 24px;
      font-size: 16px;
      color: #6c6c80;
    }
  }

  & + div {
    margin-left: 24px;
  }

  textarea {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }
`;

export const FieldGroup = styled.section`
  display: flex;
  flex: 1;
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  background: #ed1236;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.2, '#ed1236')};
  }
`;

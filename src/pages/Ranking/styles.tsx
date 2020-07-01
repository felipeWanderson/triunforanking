import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;
export const TableContainer = styled.section`
  margin-top: 64px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      &.title {
        color: #363f5f;
      }
      &.gold {
        color: #ffd700;
      }
      &.vgv {
        color: #12a454;
      }

      img.picture-realtor {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const PoleContainer = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      &.title {
        color: #363f5f;
      }
      &.gold {
        padding: 40px 32px;
        font-size: 38px;

        &.vgv {
          font-weight: bold;
          color: #ffd700;
        }
        img.picture-realtor {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      &.silver {
        padding: 40px 32px;
        font-size: 38px;

        &.vgv {
          font-weight: bold;
          color: #c0c0c0;
        }
        img.picture-realtor {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      &.bronze {
        padding: 40px 32px;
        font-size: 38px;

        &.vgv {
          font-weight: bold;
          color: #cd7f32;
        }
        img.picture-realtor {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      &.vgv {
        color: #12a454;
      }

      img.picture-realtor {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

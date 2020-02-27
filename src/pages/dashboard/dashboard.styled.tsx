import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;

  .ant-card-body {
    font-size: 24px;
  }

  .ant-timeline {
    margin-top: 20px;
  }

  .ant-timeline-item-content {
    font-size: 16px;
  }

  .anticon {
    margin-right: 5px;
  }
`;

export const BoxSearch = styled.div`
  margin-top: 20px;
  width: 240px;

  .ant-btn {
    margin-top: 10px;
  }
`;

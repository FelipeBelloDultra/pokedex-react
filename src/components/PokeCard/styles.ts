import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  transition: transform 0.2s;

  padding: 10px 5px;

  &:hover {
    transform: translateX(20px);
  }

  > img {
    height: 120px;
    width: 120px;
  }
`;

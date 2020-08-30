import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #f7c2c1 0%,
    #f2e2e1 50%,
    #f7c2c1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

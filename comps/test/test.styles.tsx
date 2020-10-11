import styled from 'styled-components';

const grey = '#979797';

export const Title = styled.div`
  padding: 30px;
  font-size: 20px;
`;

export const Grid = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding-left: 30px;
`;

export const GridItem = styled.div`
  border: 1px solid ${grey};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import Test from '../comps/test/test';

const Img = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    `url(${props.imageUrl}) no-repeat center center/cover`};
`;

export default function Home() {
  return (
    <Fragment>
      <Img imageUrl={'/background.jpg'} />
      <Test />
    </Fragment>
  );
}

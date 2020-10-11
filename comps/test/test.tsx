import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Title, Grid, GridItem } from './test.styles';

const ALL_EPISODES = gql`
  query AllEpisodes {
    episodes {
      results {
        name
      }
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(ALL_EPISODES);

  return (
    <Fragment>
      <Title>
        Apollo / GraphQl test with Ricky and Morty Api—using hook not get
        initial props
      </Title>

      <Grid>
        {data &&
          data.episodes.results.map(({ name }) => (
            <GridItem key={name}>{name}</GridItem>
          ))}
      </Grid>
    </Fragment>
  );
};

export default Test;

import React from 'react';
import styled from 'styled-components';

const ChartList = styled.div`
  display: inline-flex;
`;

const Chart = styled.div`
  width: 230px;
  background: #ffffff;
  border: solid 20px #ffffff;
  margin-right: 3rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  min-height: 280px;
  text-align: center;
  cursor: pointer;

  div:not(:last-child) {
    margin-right: 3rem;
  }

  + .item {
    margin-left: 5px;
  }
`;

const ChartName = styled.h3`
  padding: 1rem 0 1rem 0;
  font-size: 1.5rem;
`;

const ChartImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

const ArtistFollowers = styled.span`
  width: 180px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const ChartError = styled.span`
  font-size: 1.5rem;
`;

const chartList = props => {
  let chartList;

  if (props.topArtists.items) {
    chartList = props.topArtists.items.splice(0).map((artist, index) => {
      return (
        <ChartList key={index}>
          <Chart>
            <ChartImage src={artist.images[0].url} />
            <ChartName>{artist.name}</ChartName>
            {/* <ArtistFollowers>
              Followers: {artist.followers.total}
            </ArtistFollowers> */}
          </Chart>
        </ChartList>
      );
    });
  } else {
    chartList = (
      <ChartError>
        There are no artists available right now. Please sign in.
      </ChartError>
    );
  }

  return chartList;
};

export default chartList;

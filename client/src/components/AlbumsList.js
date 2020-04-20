import React from 'react';
import styled from 'styled-components';

const AlbumList = styled.div`
  display: inline-flex;
`;

const Album = styled.div`
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

const AlbumName = styled.h3`
  padding: 1rem 0 1rem 0;
  font-size: 1.5rem;
`;

const AlbumImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

const AlbumFollowers = styled.span`
  width: 180px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const AlbumError = styled.span`
  font-size: 1.5rem;
`;

const albumList = props => {
  let albumList;

  if (props.topAlbums.items) {
    albumList = props.topAlbums.items.splice(0).map((album, index) => {
      return (
        <AlbumList key={index}>
          <Album>
            <AlbumImage src={album.images[0].url} />
            <AlbumName>{album.name}</AlbumName>
            <AlbumFollowers>
              Followers: {album.followers.total}
            </AlbumFollowers>
          </Album>
        </AlbumList>
      );
    });
  } else {
    albumList = (
      <AlbumError>
        There are no albums available right now. Please sign in.
      </AlbumError>
    );
  }

  return albumList;
};

export default albumList;

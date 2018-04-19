import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStlye: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

type Album = {
  title: string,
  artist: string,
  thumbnail_image: string,
  image:string,
  url: string,
}
type Props = {
  album: Album,
};

const AlbumDetail = (props: Props) => {
  const {
    title,
    artist,
    thumbnailImage = props.album.thumbnail_image,
    image,
    url,
  } = props.album;
  const {
    thumbnailStyle,
    headerContentStlye,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnailImage }} />
        </View>
        <View style={headerContentStlye}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;


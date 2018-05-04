import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../Card';
import CardSection from '../CardDetail';
import Button from '../Button';
import styles from './style';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainer} >
        <Image
          style={styles.thumbnail}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.header} >
        <Text style={styles.headerText} >{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={styles.image}
        source={{ uri: album.image }}
      />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)} >
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

export default AlbumDetail;

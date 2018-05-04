import React, { PureComponent } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetail';

export default class AlbumList extends PureComponent {
  state = {
    albums: [],
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data.reverse() }));
  }

  render() {
    const { albums } = this.state;
    const listItems = albums.map((album, i) =>
      <AlbumDetail key={i} album={album} />);

    return (
      <ScrollView>
        {listItems}
      </ScrollView>
    );
  }
}

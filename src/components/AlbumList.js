// Import a libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Make Component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

//Make the components available to other parts of the app
export default AlbumList;

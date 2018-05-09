import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from '../ListItem';
// import styles from './style';

class LibraryList extends React.PureComponent {
  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = dataSource.cloneWithRows(this.props.libraries);
  }

  render() {
    const renderRow = library => (
      <ListItem library={library} />
    );

    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={renderRow}
      />
    );
  }
}


const mapStateToProps = state => ({
  libraries: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);

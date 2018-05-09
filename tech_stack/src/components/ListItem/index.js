import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardDetail } from '../common';
import * as actions from '../../actions';
import styles from './style';

class ListItem extends React.PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardDetail >
          <Text>{library.description}</Text>
        </CardDetail>
      );
    }
  }

  render() {
    const { library, selectLibrary } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(library.id)}
      >
        <View>
          <CardDetail >
            <Text style={styles.title}>
              {library.title}
            </Text>
          </CardDetail>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedLibraryId === ownProps.library.id,
});

export default connect(mapStateToProps, actions)(ListItem);

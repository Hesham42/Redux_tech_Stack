import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {

  renderItem(library) {
        return <ListItem library={library} />;
        // console.log(library);
        // return <Text>{library.item.title}</Text>;
      }
      render() {
        return (
          <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={library => library.id}
          />
        );
      }
    }
  
    const mapStateToProps = state => ({ libraries: state.libraries });
      
export default connect(mapStateToProps)(LibraryList);

import React,{ Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './Common';
import { connect } from 'react-redux';
import * as action from '../Actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {  
        if (this.props.expanded) {
                return (
                    <CardSection>
                        <Text style={{ flex: 1 }}>
                            {this.props.library.item.description}
                        </Text>
                    </CardSection>
 
                );
        }
    }
    render() {
        console.log(this.props);
        const { id, title } = this.props.library.item;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibaray(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                        {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>     
            </TouchableWithoutFeedback>

        );
    }
}

const styles = {
        titleStyle: {
            fontSize: 18,
            paddingLeft: 15,
        }
};

const mapStateToProps = (state, ownProps) => {  
    const expanded = state.selectedlibrariesId === ownProps.library.item.id;

    return { expanded };
};
export default connect(mapStateToProps, action)(ListItem);

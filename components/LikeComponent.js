import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

class LikeComponent extends Component {
  //? Set the liked to False
  constructor() {
    super();
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //? Change the liked on each click
  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    //? Changes The Button color on each click
    const likebutton = this.state.liked ? (
      <Image
        source={require('../assets/icons/like.png')}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 15,
          marginTop: 10,
          tintColor: '#FF8396',
        }}
      />
    ) : (
      <Image
        source={require('../assets/icons/like.png')}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 15,
          marginTop: 10,
          tintColor: 'black',
          borderColor: '#FF8396',
        }}
      />
    );
    const liketext = this.state.liked ? 'Unlike' : 'Like';
    return (
      <View
        style={{
          width: '50%',
          backgroundColor: 'white',
          flex: 1,
          marginLeft: '55%',
        }}>
        {/* //?Like Button */}
        <TouchableOpacity onPress={this.handleClick}>
          {likebutton}
        </TouchableOpacity>
      </View>
    );
  }
}

export default LikeComponent;

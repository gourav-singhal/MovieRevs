import React, {Component, PropTypes} from 'react';

import {
  StyleSheet,
  TextInput,
  LayoutAnimation,
  Animated,
  Easing,
  Text,
  View,
  Platform
} from 'react-native';
import styles from './style';

class FloatingLabel extends Component{
constructor(props) {
    super(props);
    
    this.state = {
      text: this.props.value,
      dirty: !!this.props.value
    }
    this._onFocus = this._onFocus.bind(this);
    this._animate = this._animate.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.updateText = this.updateText.bind(this);
    this._renderLabel = this._renderLabel.bind(this);
}

componentWillMount() {
    var style = this.state.dirty ? dirtyStyle : cleanStyle
    this.state.labelStyle = {
      fontSize: new Animated.Value(style.fontSize),
      top: new Animated.Value(style.top)
    }
}
  
  componentWillReceiveProps (props) {
    if (props.value !== this.state.text) {
      this.setState({ text: props.value, dirty: !!props.value })
      this._animate(!!props.value)
    }
  }

  _animate(dirty) {
    var nextStyle = dirty ? dirtyStyle : cleanStyle;
    var labelStyle = this.state.labelStyle;
    var anims = Object.keys(nextStyle).map(prop => {
      return Animated.timing(
        labelStyle[prop],
        {
          toValue: nextStyle[prop],
          duration: 200
        },
        Easing.ease
      )
    })

    Animated.parallel(anims).start()
  }

  _onFocus () {
    this._animate(true);
    this.setState({dirty: true})
    if (this.props.onFocus) {
      this.props.onFocus(arguments);
    }
  }

  _onBlur () {
    if (!this.state.text) {
      this._animate(false)
      this.setState({dirty: false});
    }

    if (this.props.onBlur) {
      this.props.onBlur(arguments);
    }
  }

  onChangeText(text) {
    this.setState({ text })
    if (this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  updateText(event) {
    var text = event.nativeEvent.text
    this.setState({ text })

    if (this.props.onEndEditing) {
      this.props.onEndEditing(event)
    }
  }

  _renderLabel () {
    return (
      <Animated.Text
        ref='label'
        style={[this.state.labelStyle, styles.label, this.props.labelStyle]}
      >
        {this.props.children}
      </Animated.Text>
    )
  }

  render() {
      const {keyboardType, underlineColorAndroid, value, secureTextEntry, inputStyle, style} = this.props;
      const props = {
          keyboardType,
          underlineColorAndroid, 
          value, 
          secureTextEntry
      }
        return (
            <View style={[styles.element, style]}>
            {this._renderLabel()}
            <TextInput
                onBlur = {this._onBlur}
                onChangeText = {this.onChangeText}
                onEndEditing = {this.updateText}
                onFocus = {this._onFocus}
                style={[styles.input, inputStyle]}
                {...props}
            >
            </TextInput>
            </View>
        );
  }
};


const cleanStyle = {
  fontSize: 20,
  top: 7
}

const dirtyStyle = {
  fontSize: 12,
  top: -17,
}


export default FloatingLabel;
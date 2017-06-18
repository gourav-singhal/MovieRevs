import React, {Component} from 'react';
import {
    View, 
    Text,
    Image
} from 'react-native'
import Carousel from 'react-native-snap-carousel';

import styles from './style';
import data from './data';

class TopRated extends Component {
    render () {
        const slides = this.data.map((entry, index) => {
            return (
                <View key={`entry-${index}`} style={styles.slide}>
                    <Image style={styles.image} source={require({})}></Image>
                </View>
            );
        });
 
        return (
            <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={50}
              itemWidth={40}
            >
                { slides }
            </Carousel>
        );
    }
}
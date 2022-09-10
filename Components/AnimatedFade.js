import React, {useRef, useEffect} from 'react';

import {Animated} from 'react-native';
const AnimatedFade = props => {
const fadeIn = useRef(new Animated.Value(0)).current;

useEffect(() => {
Animated.timing(fadeIn, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
    }).start();
}, [fadeIn]);

return (
    <Animated.View
    style={{
        ...props.style,
            opacity: fadeIn,
    }}>
        {props.children}
    </Animated.View>
    );
};

export default AnimatedFade;
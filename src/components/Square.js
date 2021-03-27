import React from 'react';

import {View} from 'react-native';

export default function Square({size,color}) {
    
    return (
        <View 
            style={
                {
                    height: size,
                    width: size,
                    backgroundColor: color || '#000'
                }
            }
        />
    )
}
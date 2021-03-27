import React, { useState } from 'react';
import {Button, StyleSheet, Text, View, Switch} from 'react-native'


import Square from '../components/Square';

export default function FlexBox() {
    const [justify, setJustify] = useState('center');
    const [align, setAlign] = useState('baseline');
    const [direction, setDirection] = useState('column');
    const [sizes, setSizes] = useState([30, 30, 30, 30, 30]);

    const [index1,setIndex1] = useState(0);

    const [index2,setIndex2] = useState(0);

    const [toggleDirection,setToggleDirection] = useState(false);

    const [toggleSize, setToggleSize] = useState(false);


    const optionsJustify = [
        'center',
        'flex-start',
        'flex-end',
        'space-evenly',
        'space-around',
        'space-between'
    ]

    const optionsAlign = [
        'center',
        'flex-start',
        'flex-end',
        'baseline'
    ]
    
    const changeJustify = () => {
        index1 + 1 < optionsJustify.length
            ? setIndex1(index1 + 1)
            : setIndex1(0);
        setJustify(optionsJustify[index1]);
    }

    const changeAlign = () => {
        index2 + 1 < optionsAlign.length
            ? setIndex2(index2 + 1)
            : setIndex2(0);
        setAlign(optionsAlign[index2]);
    }

    const changeDirection = (toggle) => {
        toggle 
            ? setDirection('column')
            : setDirection('row')
        setToggleDirection(toggle)
    }

    const changeSize = (toggle) => {
        toggle 
           ? setSizes ([10, 20, 30, 40, 50])
           : setSizes ([30, 30, 30, 30, 30])
        setToggleSize(toggle);
    }


    return (
        
        <View style={style.container}>
            <View style={[
                    style.FlexV1,
                    {
                        justifyContent: justify, 
                        alignItems: align, 
                        flexDirection: direction
                    }]}
            >
                <Square 
                    color='#ff801a'
                    size={sizes[0]}
                />
                <Square 
                    color='#50d1f6'
                    size={sizes[1]}
                />
                <Square 
                    color='#dd22c1'
                    size={sizes[2]}
                />
                <Square 
                    color='#8312ed'
                    size={sizes[3]}
                />
                <Square 
                    color='#36c9a7'
                    size={sizes[4]}
                />
            </View>

            <View style={style.panel}>
                <View>
                    <View style={style.button}>
                        <Button
                            onPress={changeJustify}
                            title='Justify Content'
                        />
                        <Text>{justify}</Text>
                    </View>

                    <View style={style.button}>
                        <Button
                            onPress={changeAlign}
                            title='Align Items'
                        />
                        <Text>{align}</Text>
                    </View>
                </View>
                
                <View>
                    <View style={style.button}>
                        <Switch
                            onValueChange={(toggle) => changeDirection(toggle)}
                            title='Flex Direction'
                            value={toggleDirection}
                        />
                        <Text>{direction}</Text>
                    </View>
                    <View style={style.button}>
                        <Switch
                            onValueChange={(toggle) => changeSize(toggle)}
                            value={toggleSize}
                        />
                        <Text>{toggleSize ? ' Tamanhos Diferentes' : 'Tamanhos Iguais'}</Text>
                    </View>
                </View>

            </View>
            

            
            
        </View>
        
        
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    
    FlexV1: {
        backgroundColor: '#000',
        // flexDirection: 'row',
        height: '50%'
    },
    button:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 5,
    },
    panel:{
        flexDirection: 'row',
        justifyContent: 'center'
    }

})
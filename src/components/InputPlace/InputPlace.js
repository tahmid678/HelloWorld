import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import myImage from '../../assets/images/dhaka.jpeg'

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={{
                    width: '80%',
                    borderBottomWidth: 1,
                    borderColor: 'green',
                    padding: 7
                }}
                placeholder='Add a place'
                value={props.inputValue}
                onChangeText={text => props.setInputValue(text)}
            />
            <Button
                title='Add'
                onPress={() => {
                    if (props.inputValue !== "") {
                        props.addPlace({
                            key: Math.random().toString(), value: props.inputValue, image: {
                                uri: 'https://images.unsplash.com/photo-1582555599578-5068e6474677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGhha2ElMjBjaXR5fGVufDB8fDB8fHww&w=1000&q=80'
                            }
                        });
                    }
                    props.setInputValue('');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default InputPlace;
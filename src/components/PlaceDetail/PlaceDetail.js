import React from 'react';
import { View, Modal, Text, Button, Image } from 'react-native';

const PlaceDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{ width: '100%', height: 300 }} />
                <Text style={{ textAlign: 'center', fontSize: 40 }}>
                    {props.place.value}
                </Text>
                <Button title='Delete' color='red' onPress={() => props.handleDeleteItem(props.place.key)} />
                <Button title='Close' color='cyan' onPress={() => props.handleHideModal()} />
            </View>
        </Modal>
    );
}

export default PlaceDetail;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from './redux/actionCreators';

const mapStateToProps = state => {
    return {
        placeList: state.placeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
        deletePlace: key => dispatch(deletePlace(key))
    }
}

const MainComponent = props => {
    const [inputValue, setInputValue] = useState("");
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleSelectedPlace = key => {
        const place = props.placeList.find(place => {
            return place.key === key;
        })
        setSelectedPlace(place);
    }

    const handleDeleteItem = key => {
        props.deletePlace(key);
        setSelectedPlace(null);
    }

    const handleHideModal = () => {
        setSelectedPlace(null);
    }

    let placeDetail = null;
    if (selectedPlace !== null) {
        placeDetail = <PlaceDetail place={selectedPlace} handleDeleteItem={handleDeleteItem} handleHideModal={handleHideModal} />
    }
    return (
        <View style={styles.container}>
            {placeDetail}
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                placeList={props.placeList}
                addPlace={props.addPlace}
            />
            <PlaceList placeList={props.placeList} handleSelectedPlace={handleSelectedPlace} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
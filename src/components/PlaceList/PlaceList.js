import React from "react";
import { FlatList } from "react-native";
import ListItem from "../LIstItem/ListItem";

const PlaceList = props => {
    return (
        <FlatList style={{
            width: '100%'
        }}
            data={props.placeList}
            renderItem={(info) => {
                return (
                    <ListItem placeName={info.item.value} onItemPressed={() => props.handleSelectedPlace(info.item.key)} image={info.item.image} />
                );
            }}
        />
    );
}

export default PlaceList;
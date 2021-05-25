import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Day(props) {
    const renderDayItem = ({item}) => {
        return (
            <ListItem 
                title={item.date}
                subtitle={item.morningweight}
                leftAvatar={item.eveningweight}
            />
        );
    };

    return(
        <FlatList
            data={props.days}
            renderItem={renderDayItem}
            keyExtractor={item => item.id.toString}
        />
    );
}

export default Day;
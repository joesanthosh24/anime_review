import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ReviewForm from './reviewForm';

// screens from Navigation get assigned navigation props automatically
export default function HomePage({ navigation }) {
    const [animes, setAnimes] = useState([
        {id: '1', name: 'Naruto', rating: '4', body: 'An anime about a kid who wants to be Hokage'},
        {id: '2', name: 'One Piece', rating: '5', body: 'An anime about a kid who wants to become the King of the Pirates'},
        {id: '3', name: 'Fairy Tail', rating: '3', body: 'An anime about a group of friends who work in a guild'}
    ]);

    const addReview = (animeReview) => {
        animeReview.id = toString(Math.random());
        setAnimes((currentAnimes) => {
            return [...currentAnimes, animeReview]
        });

        setModalState(false);
    }

    const [modalState, setModalState] = useState(false);

    const changeModalState = () => {
        setModalState(!modalState)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalState} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' style={{...styles.addIcon, ...styles.closeIcon}} size={24} onPress={changeModalState} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Text  style={globalStyles.titleText}>Add Anime</Text>
            <View>
                <MaterialIcons name='add' style={styles.addIcon} size={24} onPress={changeModalState} />
            </View>
            <FlatList 
                data={animes}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <View>
                            {/* second parameter of navigate() is an object specifying parameters we want to send to route*/}
                            <Card>
                                <Text>{ item.name }</Text>
                            </Card>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    addIcon: {
        color: '#2c2836',
        marginVertical: 10,
        borderColor: '#2c2836',
        borderWidth: 1,
        borderRadius: 14
    },
    modalContent: {
        flex: 1
    },
    closeIcon: {
        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 8
    }
})
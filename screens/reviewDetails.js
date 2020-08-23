import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function Reviews({ navigation }) {
    const { ratings, anime } = images;

    const rating = navigation.getParam('rating');
    const animeName = navigation.getParam('name');

    return (
        <View style={globalStyles.container}>
            <Card>
                {/* navigation.getParam() gets parameter send to by navigation of previous screen
                The parameter you want is specified as a string as a parameter in the function
            */}
                <View style={styles.animeView}>
                    {navigation.getParam('imgSrc') ?
                        <Image 
                            style={{width: 100, height: 100}}
                            source={{
                                uri: navigation.getParam('imgSrc')
                            }}
                        />
                        :
                        <Image 
                            style={{width: 100, height: 100}}
                            source={anime[animeName]}
                        />
                    }
                </View>
                <Text style={globalStyles.titleText}>{navigation.getParam('name')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image source={ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#6c3882"
    },
    animeView: {
        justifyContent: "center",
        alignItems: "center",
    }
})
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutPage() {
    return (
        <View style={globalStyles.container}>
            <Text>
                This app lets users add an anime they like and post a review on it. Created by Joe Santhosh, during his time at Carleton University while trying to go for his bachelor's degree.
            </Text>
        </View>
    );
}
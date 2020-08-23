import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function CustomButton({ displayText, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {displayText}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#32c99f'
    },
    buttonText: {
        fontWeight: "bold",
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 6
    }
})

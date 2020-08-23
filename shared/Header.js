import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation, image, icon }) {
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* Icon for the menu */}
            { icon ? <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openDrawer} />
                : null
            }
            <View style={styles.headerTitle}>
                <Image source={image} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    headerTitle: {
        flexDirection: "row"
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        height: 26,
        width: 26,
        marginRight: 10
    }
});
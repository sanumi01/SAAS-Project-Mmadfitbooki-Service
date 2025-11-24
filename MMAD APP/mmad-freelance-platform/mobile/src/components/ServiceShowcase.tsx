import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const servicesData = [
    { id: '1', title: 'Web Development', description: 'Building responsive and functional websites.' },
    { id: '2', title: 'Graphic Design', description: 'Creating visually appealing designs and logos.' },
    { id: '3', title: 'SEO Services', description: 'Optimizing websites for better search engine rankings.' },
];

const ServiceShowcase = () => {
    const renderServiceItem = ({ item }) => (
        <View style={styles.serviceItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={servicesData}
                renderItem={renderServiceItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    serviceItem: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default ServiceShowcase;
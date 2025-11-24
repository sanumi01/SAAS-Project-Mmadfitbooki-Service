import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getEnquiries } from '../services/enquiryService'; // Assuming you have a service to fetch enquiries

const EnquiriesScreen = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const data = await getEnquiries();
                setEnquiries(data);
            } catch (error) {
                console.error("Error fetching enquiries:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEnquiries();
    }, []);

    const renderEnquiry = ({ item }) => (
        <View style={styles.enquiryItem}>
            <Text style={styles.enquiryText}>Client: {item.clientName}</Text>
            <Text style={styles.enquiryText}>Service: {item.serviceName}</Text>
            <Text style={styles.enquiryText}>Message: {item.message}</Text>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading enquiries...</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={enquiries}
            renderItem={renderEnquiry}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    enquiryItem: {
        marginBottom: 12,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    enquiryText: {
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EnquiriesScreen;
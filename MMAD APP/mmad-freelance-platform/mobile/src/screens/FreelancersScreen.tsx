import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getFreelancers } from '../services/freelancerService';

const FreelancersScreen = () => {
    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const data = await getFreelancers();
                setFreelancers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFreelancers();
    }, []);

    const renderFreelancer = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.services.join(', ')}</Text>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={freelancers}
            renderItem={renderFreelancer}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default FreelancersScreen;
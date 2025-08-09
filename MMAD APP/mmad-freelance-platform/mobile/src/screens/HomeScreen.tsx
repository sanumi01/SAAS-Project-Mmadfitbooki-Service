import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the MMAD Freelance Platform</Text>
            <Button
                title="Register as Freelancer"
                onPress={() => navigation.navigate('FreelancerRegister')}
            />
            <Button
                title="Submit an Enquiry"
                onPress={() => navigation.navigate('ClientEnquiryForm')}
            />
            <Button
                title="View Services"
                onPress={() => navigation.navigate('ServiceShowcase')}
            />
        </View>
    );
};

export default HomeScreen;
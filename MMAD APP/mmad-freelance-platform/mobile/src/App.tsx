import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FreelancersScreen from './screens/FreelancersScreen';
import EnquiriesScreen from './screens/EnquiriesScreen';
import FreelancerRegister from './components/FreelancerRegister';
import ClientEnquiryForm from './components/ClientEnquiryForm';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Freelancers" component={FreelancersScreen} />
        <Stack.Screen name="Enquiries" component={EnquiriesScreen} />
        <Stack.Screen name="Freelancer Register" component={FreelancerRegister} />
        <Stack.Screen name="Client Enquiry" component={ClientEnquiryForm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
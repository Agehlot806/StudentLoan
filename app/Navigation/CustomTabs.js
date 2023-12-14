import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from '../Screens/Home';

const Tab = createBottomTabNavigator();
const CustomTAbBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'transparent',
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: hp('10%'),
        top: hp('-8%'),
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'red',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const CustomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarShowLabel: false,
        //   tabBarIcon: () => (
        //     <>
        //       <BNHomeIcon height={hp('3.2%')} width={wp('10%')} />
        //       <Text style={styles.label}>Home</Text>
        //     </>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Services"
        component={Home}
        // options={{
        //   tabBarIcon: () => (
        //     <>
        //       <BNServicesNew height={hp('3.2%')} width={wp('10%')} />
        //       <Text style={styles.label}>Services</Text>
        //     </>
        //   ),
        // }}
      />
      <Tab.Screen
        name="PropertyForm"
        component={Home}
        // options={{
        //   tabBarIcon: () => <BNLoan height={hp('3.2%')} width={wp('10%')} />,
        //   tabBarButton: props => <CustomTAbBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name="LoanType"
        component={Home}
        // options={{
        //   tabBarIcon: () => (
        //     <>
        //       <BNLoan height={hp('3.2%')} width={wp('10%')} />
        //       <Text style={styles.label}>Loan</Text>
        //     </>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Partner"
        component={Home}
        // options={{
        //   tabBarIcon: () => (
        //     <>
        //       <BNEnquiryIcon height={hp('3.2%')} width={wp('10%')} />
        //       <Text style={styles.label}>Partner</Text>
        //     </>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  Icons: {
    width: wp('7%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  label: {
    color: '#fff',
    marginTop: hp('0.5%'),
    fontSize: hp('2%')
  },
});

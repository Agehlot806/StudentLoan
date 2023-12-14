import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawer = ({navigation}) => {

  const LogoutFuction = () => {
    navigation.navigate('LoginNumber');
  };

  const DrawerData = [
    {
      id: 1,
      name: 'Home',
      link: 'Home',
    },
    {
      id: 2,
      name: 'Profile',
      link: 'Profile',
    },
    {
      id: 3,
      name: 'Property for Buy',
      link: 'Property',
    },
    {
      id: 4,
      name: 'Property for Rent',
      link: 'Property',
    },
    {
      id: 5,
      name: 'New Projects',
      link: 'Property',
    },
    {
      id: 6,
      name: 'Explore localoties',
      link: 'Search',
    },
    {
      id: 7,
      name: 'Property Advice',
      link: 'Form',
    },
    {
      id: 8,
      name: 'Post Property',
      link: 'PropertyForm',
    },
    {
      id: 9,
      name: 'Adverties with us',
      link: 'Form',
    },
    {
      id: 10,
      name: 'Loans',
      link: 'LoanType',
    },
    {
      id: 11,
      name: 'Srvices',
      link: 'Services',
    },
    {
      id: 12,
      name: 'Notifications',
      link: 'Notification',
    },
    {
      id: 13,
      name: 'Messages',
      link: 'Messages',
    },
    {
      id: 14,
      name: 'Favourites',
      link: 'Favourite',
    },
    {
      id: 15,
      name: 'About Us',
      link: '',
    },
    {
      id: 16,
      name: 'Terms and Condition',
      link: '',
    },
    {
      id: 17,
      name: 'Rate Us',
      link: '',
    },
  ];
  return (
    <DrawerContentScrollView style={styles.drawerMain} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'red'} barStyle={'light-content'} />
      <View>
        <TouchableOpacity style={styles.profileView}>
          {/* <Image
            source={
              ProfileData ?
              ProfileData?.user[0]?.image !== null
                ? {
                    uri: `https://inhouse.hirectjob.in/public/${ProfileData?.user[0]?.image}`,
                  }
                : require('../../assets/images/user.png')
                : require('../../assets/images/user.png')
            }
            style={styles.profileImg}
          /> */}
          <View>
            <Text style={styles.userName}>Demo user</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.logoutView}>
          {DrawerData.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.logoutButton}
                onPress={() => navigation.navigate(item.link)}>
                <Text style={styles.buttonTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => LogoutFuction()}>
            <Text style={styles.buttonTxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerMain: {
    flex: 1,
    backgroundColor: 'red',
  },
  profileView: {
    padding: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: hp('0.2%'),
  },
  profileImg: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: hp('50%'),
  },
  userName: {
    fontSize: hp('2.5%'),
    color: '#fff',
    marginLeft: hp('2%'),
    textTransform: 'capitalize',
  },
  logoutView: {
    padding: hp('2%'),
  },
  logoutButton: {
    width: wp('50%'),
    height: hp('7%'),
    borderRadius: hp('1%'),
    justifyContent: 'center',
    marginBottom: hp('1%'),
  },
  buttonTxt: {
    color: '#000',
    fontSize: hp('2.2%'),
    textTransform: 'capitalize',
  },
});

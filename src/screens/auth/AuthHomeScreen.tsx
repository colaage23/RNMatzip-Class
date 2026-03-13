import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@/types/navigaions';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen({}) {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>AuthHomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;

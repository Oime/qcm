import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMyContext } from '../MyContext';

const Header = () => {
  const { sharedVariables, updateSharedVariables } = useMyContext();

  const handleReturn = () => {
    updateSharedVariables("page", "sujets");
  };

  return (
    <View style={styles.headerContainer}>
      {sharedVariables.page === "sujets" && (
        <Text style={styles.headerTitle}>Choix du sujet</Text>
      )}
      {sharedVariables.page === "game" && (
        <Text style={styles.headerTitle} onPress={handleReturn}>CP - Questionner le monde</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#318CE7',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMyContext } from '../MyContext';

const Header = () => {
  const { page, updatePage } = useMyContext();

  const handleReturn = () => {
    updatePage("sujets");
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} onPress={handleReturn}>CP - Questionner le monde</Text>
      {/* Ajoutez d'autres éléments du header selon vos besoins */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#318CE7', // Couleur de fond du header
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff', // Couleur du texte du header
    fontWeight: 'bold',
  },
});

export default Header;
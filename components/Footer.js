import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useMyContext } from '../MyContext';

const Footer = ({ questionRepondu, questionTotal, onActionPress }) => {
  const { page, updatePage } = useMyContext();

  return (
    <View style={styles.footerContainer}>
      {page === "game" && (
        <>
          <Text style={styles.footerText}>
            Questions répondues : {questionRepondu}/{questionTotal}
          </Text>
          <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
            <Text style={styles.actionButtonText}>Suivant</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#ddd',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#318CE7',
    padding: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
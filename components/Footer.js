import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useMyContext } from '../MyContext';

const Footer = ({ questionRepondu, questionTotal, onActionPress }) => {
  const { sharedVariables, updateSharedVariables } = useMyContext();

  return (
    <View style={styles.footerContainer}>
      {sharedVariables.page === "game" && (
        <>
          <Text style={styles.footerText}>
            Questions : {questionRepondu}/{questionTotal}
          </Text>
          <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
            <Text style={styles.actionButtonText}>Suivant</Text>
          </TouchableOpacity>
        </>
      )}
      {sharedVariables.page === "sujets" && (
        <Text style={styles.footerText} />
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
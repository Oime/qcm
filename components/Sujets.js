import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useMyContext } from '../MyContext';

const Sujets = () => {
  const { sharedVariables, updateSharedVariables } = useMyContext();

  const [sujets, setSujets] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(process.env.EXPO_PUBLIC_URL_API + 'getSujets/');
        console.log(response.data);
        setSujets(response.data);
      } catch (error) {
        console.error('Erreur lors de l\'appel de l\'API:', error);
      }
    }

    fetchDataFromApi();
  }, []);

  const handleSelectAnswer = (code) => {
    updateSharedVariables("page", "game");
    updateSharedVariables("sujet", code);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView>
          {sujets && sujets.map((option) => (
            <TouchableOpacity
              key={option.code}
              style={styles.optionButton}
              onPress={() => handleSelectAnswer(option.code)}
            >
              <Text style={styles.optionText}>{option.nom}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  optionText: {
    fontSize: 16,
  },
});

export default Sujets;
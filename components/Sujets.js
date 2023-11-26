import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useMyContext } from '../MyContext';

const Sujets = () => {
    const { page, updatePage } = useMyContext();
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
        updateSharedVariable(code);
    };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 1 }}>
                {sujets && sujets.map((option) => (
                    <TouchableOpacity
                      key={option.code}
                      style={styles.optionButton}
                      onPress={() => handleSelectAnswer(option.code)}
                    >
                      <Text style={styles.optionText}>{option.nom}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Footer />
        </View>
    );
};

export default Sujets;
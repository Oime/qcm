import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useMyContext } from '../MyContext';

const Game = () => {
  const { sharedVariables, updateSharedVariables } = useMyContext();

  const [questions, setQuestions] = useState(null);
  const [questionRepondu, setQuestionRepondu] = useState(0);

  const handleActionPress = () => {
    if (questionRepondu < questions.length - 1) {
      setQuestionRepondu(questionRepondu + 1);
    }
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(process.env.EXPO_PUBLIC_URL_API + 'getQuestions/?sujet=' + sharedVariables.sujet);
        console.log(response.data);
        setQuestions(response.data);
      } catch (error) {
        console.error('Erreur lors de l\'appel de l\'API:', error);
      }
    }

    fetchDataFromApi();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Content questions={questions} questionRepondu={questionRepondu}>
      </Content>
      <Footer questionRepondu={questionRepondu} questionTotal={20} onActionPress={handleActionPress} />
    </View>
  );
};

export default Game;
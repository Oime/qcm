import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getFelicitation } from '../utils';

export default function Content({ questions, questionRepondu }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correction, setCorrection] = useState(null);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[questionRepondu].reponse) {
      setCorrection(getFelicitation());
    } else {
      setCorrection("La réponse était " + questions[questionRepondu].reponse);
    }
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setCorrection(null);
  }, [questionRepondu]);

  return (
    <View style={styles.questionContainer}>
      {questions && questions.length > 0 && (
        <>
          <Text style={styles.questionText}>{questions[questionRepondu].question}</Text>
          <View style={styles.answerBtnContainer}>
            {questions[questionRepondu].typeRep === "btn" && questions[questionRepondu].reponses.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedAnswer === option && option === questions[questionRepondu].reponse && styles.selectedOptionOk,
                  selectedAnswer === option && option !== questions[questionRepondu].reponse && styles.selectedOptionKo,
                ]}
                onPress={() => selectedAnswer ? null : handleSelectAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            {questions[questionRepondu].typeRep === "nbr" && (
              <TextInput style={styles.input} onChangeText={setSelectedAnswer} value={selectedAnswer} keyboardType="numeric" />
            )}
          </View>
          {correction && (
            <Text style={styles.correctionText}>{correction}</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 23,
  },
  questionText: {
    fontSize: 23,
    marginBottom: 10,
  },
  answerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  selectedOptionOk: {
    backgroundColor: '#4CAF50',
  },
  selectedOptionKo: {
    backgroundColor: 'red',
  },
  correctionText: {
    marginTop: 23,
    fontSize: 23,
  },
  optionText: {
    fontSize: 23,
  },
  input: {
    height: 40,
    minWidth: 80,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 23,
  },
});

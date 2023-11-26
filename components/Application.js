import React from 'react';
import { View } from 'react-native';
import Game from './Game';
import Sujets from './Sujets';
import { useMyContext } from '../MyContext';

const Application = () => {
  const { sharedVariables, updateSharedVariables } = useMyContext();

  return (
    <View style={{ flex: 1 }}>
      {sharedVariables.page === "sujets" && (<Sujets />)}
      {sharedVariables.page === "game" && (<Game />)}
    </View>
  );
};

export default Application;
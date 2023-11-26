import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Game from './Game';
import Sujets from './Sujets';
import { useMyContext } from '../MyContext';

const Application = () => {
    const { page, updatePage } = useMyContext();

    useEffect(() => {
        updatePage("game");
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {page === "sujets" && (<Sujets />)}
            {page === "game" && (<Game />)}
        </View>
    );
};

export default Application;
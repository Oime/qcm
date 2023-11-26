import React from 'react';
import { View, StatusBar } from 'react-native';
import { MyProvider } from './MyContext';
import Application from './components/Application';

const App = () => {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
            <MyProvider>
                <Application />
            </MyProvider>
        </View>
    );
};

export default App;
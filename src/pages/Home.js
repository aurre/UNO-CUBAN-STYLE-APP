import React from 'react';
import { Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <Button
            title="Set up Game"
            onPress={() =>
                navigation.navigate('GameSetUp', { name: 'GameSetUp' })
            }
        />
    );
};

export default Home
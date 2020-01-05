import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => Console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <ImageBackground
      source={require('./assets/images/success.png')}
      style={styles.screen}
    >
      <Header title="Guess a Number" />
      {content}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

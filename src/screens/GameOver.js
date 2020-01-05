import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import BobyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={1000}
            //source={require('../../assets/images/success.png')}
            source={{
              uri:
                'https://cdn.education.com/files/static/game-images/thinking-of-a-number.png'
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BobyText style={styles.resultText}>
            You did <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BobyText>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  }
});

export default GameOver;

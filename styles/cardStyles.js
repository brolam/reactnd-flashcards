import { StyleSheet } from 'react-native';
import { View, Text, Platform } from 'react-native'
import { white } from './colors'

const cardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: white,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
  },
  cardIOS: {
    borderRadius: 8,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  cardAndroid: {
    borderRadius: 4,
    shadowRadius: 2,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderColor: '#ddd',
  }
});

export default cardStyle = [
  cardStyles.card,
  Platform.OS === 'ios' ? cardStyles.cardIOS : cardStyles.cardAndroid
]

import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import CardStyle from '../styles/cardStyles'
import { white, green, red } from '../styles/colors'

export default function DeckWriteModal(props) {
  return (
    <Modal animationType='fade' transparent={true} >
      {Platform.OS === 'ios' ?
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <DeckWriteBody {...props} />
        </KeyboardAvoidingView>
        :
        <View style={styles.container} >
          <DeckWriteBody {...props} />
        </View>
      }
    </Modal>
  )
}

function DeckWriteBody(props) {
  return (
    <View style={[CardStyle, styles.body]}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        placeholder="Enter with a Deck Title."
        style={styles.titleTextInput}
        onChange={() => { }} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSave]}
          onPress={() => console.log('Save Deck')}>
          <Text style={styles.textButtons}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonCancel]}
          onPress={() => console.log('Cancel Add Deck')}>
          <Text style={styles.textButtons}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  body: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    width: (Platform.OS !== 'ios' ? '80%' : undefined)
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  titleTextInput: {
    fontSize: 24,
    marginBottom: 20,
    height: 50,
    width: '100%'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  buttonSave: {
    backgroundColor: green,
    margin: 5
  },
  buttonCancel: {
    backgroundColor: red,
    margin: 5
  },
  textButtons: {
    color: white,
    fontSize: 24
  },
});
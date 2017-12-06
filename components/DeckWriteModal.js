import React from 'react'
import {
  StyleSheet,
  Alert,
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { white, green, red } from '../styles/colors'

export default function DeckWriteModal(props) {
  return (
    <Modal animationType='fade' transparent={true} onRequestClose={() => { }} >
      {Platform.OS === 'ios'
        ? <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <DeckWriteBody {...props} />
        </KeyboardAvoidingView>
        : <View style={styles.container} >
          <DeckWriteBody {...props} />
        </View>
      }
    </Modal>
  )
}

function DeckWriteBody(props) {
  let textInputTile = {}
  function onSave() {
    if (textInputTile.value && textInputTile.value.length > 0)
      props.onSave && props.onSave(textInputTile.value)
    else {
      Alert.alert('Title is required')
    }
  }
  return (
    <View style={[cardStyle, styles.body]}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        ref={input => { textInputTile = input }}
        placeholder="Enter with a Deck Title."
        style={styles.titleTextInput}
        onChangeText={text => textInputTile.value = text} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSave]}
          onPress={onSave}>
          <Text style={styles.textButtons}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonCancel]}
          onPress={props.onCancel}>
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
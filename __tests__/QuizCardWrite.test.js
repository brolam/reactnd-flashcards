import React from 'react'
import QuizCardWrite from '../components/QuizCardWrite'

test('renders without crashing', () => {
  const wrapper = shallow(<QuizCardWrite />);
  expect(wrapper).toMatchSnapshot();
});

test('onSave event expect an answer correct', () => {
  const onSave = jest.fn()
  const quizCardWrite = mount(
    <QuizCardWrite
      onSave={onSave}
    />);
  fillQuziCardWriteInputs(quizCardWrite)
  const buttonSaveCorrect = quizCardWrite.find('TouchableOpacity').at(0)
  buttonSaveCorrect.props().onPress()
  expect(onSave).toHaveBeenCalledWith('One Question', 'One Answer', true);
});

test('onSave event expect an answer incorrect', () => {
  const onSave = jest.fn()
  const quizCardWrite = mount(
    <QuizCardWrite
      onSave={onSave}
    />);
  fillQuziCardWriteInputs(quizCardWrite)
  const buttonSaveInCorrect = quizCardWrite.find('TouchableOpacity').at(1)
  buttonSaveInCorrect.props().onPress()
  expect(onSave).toHaveBeenCalledWith('One Question', 'One Answer', false);
});

test('question field is required', () => {
  const onSave = jest.fn()
  const quizCardWrite = mount(
    <QuizCardWrite
      onSave={onSave}
    />);
  fillQuziCardWriteInputs(quizCardWrite)
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const buttonSaveInCorrect = quizCardWrite.find('TouchableOpacity').at(1)
  textInputQuestion.props().onChangeText('')
  buttonSaveInCorrect.props().onPress()
  expect(onSave).not.toHaveBeenCalled();
});

test('answer field is required', () => {
  const onSave = jest.fn()
  const quizCardWrite = mount(
    <QuizCardWrite
      onSave={onSave}
    />);
  fillQuziCardWriteInputs(quizCardWrite)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  const buttonSaveInCorrect = quizCardWrite.find('TouchableOpacity').at(1)
  textInputAnswer.props().onChangeText('')
  buttonSaveInCorrect.props().onPress()
  expect(onSave).not.toHaveBeenCalled();
});

function fillQuziCardWriteInputs(quizCardWrite){
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  textInputQuestion.props().onChangeText('One Question')
  textInputQuestion.props().onSubmitEditing()
  textInputAnswer.props().onChangeText('One Answer')
}
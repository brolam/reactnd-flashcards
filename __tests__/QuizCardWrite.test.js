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
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  const buttonSaveCorrect = quizCardWrite.find('TouchableOpacity').at(0)
  textInputQuestion.props().onChangeText('One Question')
  textInputAnswer.props().onChangeText('One Answer')
  buttonSaveCorrect.props().onPress()
  expect(onSave).toHaveBeenCalledWith('One Question', 'One Answer', true);
});

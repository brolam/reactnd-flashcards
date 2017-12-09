import React from 'react'
import {
  createReminderAnswerQuiz,
  getNextDateReminder
} from '../util/NotificationsHelper'

test('create reminder to answer a quiz', () => {
  expect(createReminderAnswerQuiz).toEqual({
    title: 'Keep learning!',
    body: "Do not forget to answer a quiz today.",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  })
})

test('get next date reminder to answer a quiz', () => {
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(20)
  tomorrow.setMinutes(0)
  expect(getNextDateReminder('ANSWER_A_QUIZ')).toEqual(tomorrow)
})
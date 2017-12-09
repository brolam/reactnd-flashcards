import React from 'react'

export const createReminderAnswerQuiz = {
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
}

export function getNextDateReminder(reminderType) {
  if (reminderType === 'ANSWER_A_QUIZ') {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)
    return tomorrow
  }
}
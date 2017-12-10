import React from 'react'
import { Notifications, Permissions } from 'expo'
import { setReminderScheduled } from '../storage'

export const REMINDER_TYPES = {
  ANSWER_A_QUIZ: 'ANSWER_A_QUIZ'
}

export const getReminderByType = (reminderType) => {
  if (reminderType === REMINDER_TYPES.ANSWER_A_QUIZ)
    return ({
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
}

export function getNextDateReminder(reminderType) {
  if (reminderType === REMINDER_TYPES.ANSWER_A_QUIZ) {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)
    return tomorrow
  }
}

export function setReminderScheduledNotification(reminderType) {
  Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
          const nextReminder = getNextDateReminder(reminderType)
          setReminderScheduled(true).then(() => {
            Notifications.scheduleLocalNotificationsAsync(
              getReminderByType(reminderType),
              {
                time: nextReminder,
                repeat: 'day',
              }
            )
          })
        })
      }
    })
}

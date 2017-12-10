import React from 'react'
import { Notifications, Permissions } from 'expo'
import MockAsyncStorage from 'mock-async-storage'

const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)

const spyCancelAllScheduledNotificationsAsync = jest.fn()
const spyScheduleLocalNotificationAsync = jest.fn()

Notifications.cancelAllScheduledNotificationsAsync = () => new Promise(function (then) {
  spyCancelAllScheduledNotificationsAsync()
  then()
})

Notifications.scheduleLocalNotificationAsync = () => new Promise(function (then) {
  spyScheduleLocalNotificationAsync()
})

Permissions.askAsync = () => new Promise(function (then) { then({ status: 'granted' }) })

import {
  getReminderByType,
  getNextDateReminder,
  setReminderScheduledNotification
} from '../util/NotificationsHelper'

import { isReminderScheduled } from '../storage'

const expectCreateRemindetAnswerQuiz = {
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

test('create reminder to answer a quiz', () => {
  expect(getReminderByType('ANSWER_A_QUIZ')).toEqual(expectCreateRemindetAnswerQuiz)
})

test('get next date reminder to answer a quiz', () => {
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(20)
  tomorrow.setMinutes(0)
  const nextRemainder = getNextDateReminder('ANSWER_A_QUIZ')
  expect(String(nextRemainder).substring(1, 24)).toEqual(String(tomorrow).substring(1, 24))
})

describe('reminder scheduled notification', () => {
  const doneExpects = true
  test('try set reminder', () => {
    setReminderScheduledNotification('ANSWER_A_QUIZ')
  })

  test('reminder was setted', () => {
    expect(spyCancelAllScheduledNotificationsAsync).toHaveBeenCalled()
    expect(spyScheduleLocalNotificationAsync).toHaveBeenCalled()
  })

  test('reminder scheduled setted', () => {
    expect.assertions(2);
    isReminderScheduled().then(reminderSetted => {
      expect(reminderSetted).toBe(true)
      expect(doneExpects).toBe(true)
    })
  })
})

test('undefined parameters', () => {
  Permissions.askAsync = () => new Promise(function (then) { then({ status: 'undefined' }) })
  expect(getReminderByType()).toEqual(undefined)
  expect(getNextDateReminder()).toEqual(undefined)
  expect(setReminderScheduledNotification('ANSWER_A_QUIZ')).toEqual(undefined)
})
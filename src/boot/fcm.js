/* eslint-disable indent */

import { Platform } from 'quasar'

if (Platform.is.cordova) {
    cordova.plugins.firebase.messaging.onMessage(function (payload) {
        console.log('New foreground FCM message: ', payload)
    })

    cordova.plugins.firebase.messaging.onBackgroundMessage(function (payload) {
        console.log('New background FCM message: ', payload)
    })
}

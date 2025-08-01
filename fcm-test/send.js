const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationToken = "12345678"; //  Receiver's Token

const message = {
  notification: {
    title: 'Test Notification ',
    body: 'You received this from Firebase HTTP v1 API',
  },
  token: registrationToken,
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.inventoryApp = functions.https.onRequest((request, response) => {
    response.send("Hello from Inventory App!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
}

exports.inventoryCreated = functions.firestore.document('inventories/{inventoryId}').onCreate(doc => {
    const inventory = doc.data();
    const notification = {
        content: 'Added a new Inventory',
        user: `${inventory.authorFirstName} ${inventory.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
});

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                console.log(newUser)
                const notification = {
                    content: 'Joined the application',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                console.log(notification)
                return createNotification(notification);
            })
    })

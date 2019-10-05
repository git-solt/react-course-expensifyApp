
import * as firebase from 'firebase'
import moment from 'moment'

//asteriks for alle importene lagret på firebase variabelen

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}




firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }


// child_removed

// const watchRemoved = (snapshot) => console.log(snapshot.key, snapshot.val())
// database.ref('expenses').on('child_removed', watchRemoved)

// database.ref('expenses').off('child_removed', watchRemoved )

// database.ref('expenses').on('child_added', (snapshot) => console.log('added: ', snapshot.key))

// database.ref('expenses').push({
//   description: 'Car buy',
//   note: '',
//   amount: 2345,
//   createdAt: 232454363

// })

// database.ref('expenses').on('child_removed', watchRemoved)




// database.ref('expenses').on('child_changed', (snapshot) => console.log('changed:', snapshot.key, snapshot.val()))

// database.ref('notes').push({
//   body: 'React Native, Angular, Python',
//   title: 'Course Topics'
// })

// database.ref('notes/-LqMxs6dkSucV1-cAIw3').remove()

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 347935325252
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((cur) => {
//       expenses.push({
//         id: cur.key,
//         ...cur.val()
//       })
//     })
//     console.log(expenses)
//   })

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = []
  //   snapshot.forEach((snapShotChild) => {
  //     expenses.push({
  //       id: snapShotChild.key,
  //       ...snapShotChild.val()
  //     })
  //   })
  //   console.log(expenses)
  // })



// database.ref('notes').set(notes)

// database.ref('arr').once('value', (ss) => console.log(ss.val()[1]) )

//Fetching data from the root of the base

//for every time the data updates

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   const {name, job} = val
//   console.log(`${name} works at ${job.company} as a ${job.title}`, val )
// })



// setTimeout(() => {
//   database.ref('name').set('Nina')
// }, 3000)

// setTimeout(() => {
//   database.ref().update({
//     'location/city': 'Oslo'
//   })
// }, 5000)

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Google'
//   })
// }, 5000)

//Just once

// database.ref().once('value')
//   .then((data) => console.log(data.val()))
//   .catch((err) => console.log('Error: ', err))

// database.ref().set({
//   name: 'andrew',
//   age: 22,
//   isSignle: true,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     contry: 'United states'
//   }
// }).then((data) => console.log('Data saved: '))
// .catch(e => console.log('There was an error', e))

// // database.ref('age').set(26)
// // database.ref('location/city').set('New york')
// // database.ref('attributes').set({
// //   height: '186 cm',
// //   weight: '82 kg'
// // })
// // .then(() => console.log('Data is set'))
// // .catch(error => ('Error: ', error))
// database.ref('isSignle').remove()
// .then(() => console.log('data removed'))
// .catch(e => console.log(e))

// database.ref('location').update({
//   city: 'chicago'
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'seattle'
// })


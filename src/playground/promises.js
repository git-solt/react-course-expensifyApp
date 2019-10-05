


const promise =  new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 22
    })
    reject('No way, rejecting this')
  }, 5000)
})

console.log('before')

promise.then(data => {
  console.log('1', data)
  return 'Return the resolved data, or whatever you like to the nedt then call'

}).then((data) => {
  let arr = []
  arr.push(data)
  console.log('2', arr)
  

    return {
      data: data
    }


})
.then((data) => console.log('3: Heres the last data', data))
.catch(err => console.log('error', err))

console.log('after')
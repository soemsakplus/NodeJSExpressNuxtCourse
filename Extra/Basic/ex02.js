const fatchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  })
}

console.log('Start')

fatchData()
  .then(text => {
    console.log(text)
    return text
  })
  .then(text2 => {
    console.log('2' + text2)
  })
  .catch( err => {
    console.log('error')
  })


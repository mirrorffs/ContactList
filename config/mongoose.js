const mongoose = require('mongoose')
const url='mongodb+srv://mirrorffs:Avigupta121@cluster0.etq2iyi.mongodb.net/'

async function main() {
  await mongoose.connect(url);
}
main().then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })




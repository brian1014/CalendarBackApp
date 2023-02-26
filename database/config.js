const mongoose = require('mongoose')

const dbConnection = async() => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.DB_CNN)
    /* , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } */
    console.log('DB Online')
    
  } catch (error) {
    console.error(error)
    throw new Error('Error no se pudo inicializar la Base de datos')
  }
}

module.exports = {
  dbConnection
}
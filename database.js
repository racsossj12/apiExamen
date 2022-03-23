const mongoose = require('mongoose');
const URL = 'mongodb+srv://local:shinreiget226@cluster0.l21sc.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conectado con MongoDB'))
.catch(err => console.log('Tienes un error: ', err));

module.exports = mongoose;
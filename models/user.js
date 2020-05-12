var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// incluindo a o pacote/biblioteca de validação de unicidade
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName:{type: String, required: true },
    lastName:{type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});
schema.plugin(mongooseUniqueValidator);

//Não da para instanciar o schema por isso criamos um modelo, que futuramente será usado
module.exports = mongoose.model('User', schema);
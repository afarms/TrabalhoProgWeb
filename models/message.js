var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}); 
//Não da para instanciar o schema por isso criamos um modelo, que futuramente será usado
module.exports =mongoose.model('Message',schema);
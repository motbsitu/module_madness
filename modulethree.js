var randomNumber = require('./moduleone');
var convertToUsd = require('./moduletwo');

exports.newNumber = function (){
  var ran = randomNumber(100, 1000000);
  var convert = convertToUsd(ran);
  return convert;
};

exports.output = function (converted){
  return ('Account balance: \n');
}

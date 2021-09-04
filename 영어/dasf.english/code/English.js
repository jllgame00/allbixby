var console = require('console');

module.exports.function = function help() {
  var data = require('/data/ENGLISH.js');
  data = data[0];

  var iter = data.count;

  var res = [];

  for (var i = 0; i < iter; i++) {
    var tmp_fact = [];
    var tmp_cnt = 0;

    if(data.data[i].sum1 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum1;
    }
    if(data.data[i].sum2 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum2;
    }
    if(data.data[i].sum3 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum3;
    }
    if(data.data[i].sum4 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum4;
    }
    if(data.data[i].sum5 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum5;
    }
    if(data.data[i].sum6 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum6;
    }
    if(data.data[i].sum7 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum6;
    }

    console.log(tmp_fact[7])
    if(tmp_fact[7] == "")
      tmp_fact[7] = " ";

    res[i] = {
      englishname: data.data[i].englishname,
      fact:tmp_fact,
    }
  }
  
  return res;
}

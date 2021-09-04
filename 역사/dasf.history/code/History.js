var console = require('console');

module.exports.function = function help() {
  var data = require('/data/HISTORY.js');
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
      tmp_fact[tmp_cnt++] = data.data[i].sum7;
    }
    if(data.data[i].sum8 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum8;
    }
    if(data.data[i].sum9 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum9;
    }
    if(data.data[i].sum10 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum10;
    }
    if(data.data[i].sum11 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum11;
    }
    if(data.data[i].sum12 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum12;
    }
    if(data.data[i].sum13 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum13;
    }
    if(data.data[i].sum14 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum14;
    }
    if(data.data[i].sum15 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum15;
    }
    if(data.data[i].sum16 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum16;
    }
    if(data.data[i].sum17 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum17;
    }
    if(data.data[i].sum18 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum18;
    }
    if(data.data[i].sum19 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum19;
    }
    if(data.data[i].sum20 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum20;
    }
    if(data.data[i].sum21 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum21;
    }
    if(data.data[i].sum22 != null) {
      tmp_fact[tmp_cnt++] = data.data[i].sum22;
    }

    console.log(tmp_fact[8])
    if(tmp_fact[8] == "")
      tmp_fact[8] = " ";

    res[i] = {
      historyname: data.data[i].historyname,
      fact:tmp_fact,
    }
  }
  
  return res;
}

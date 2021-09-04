var console = require('console');

module.exports.function = function help() {
  var data = require('/data/FIRSTAID.js');
  data = data[0];

  var iter = data.count;

  var res = [];

  for (var i = 0; i < iter; i++) {
    var tmp_aid = [];
    var tmp_cnt = 0;

    if(data.data[i].sum1 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum1;
    }
    if(data.data[i].sum2 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum2;
    }
    if(data.data[i].sum3 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum3;
    }
    if(data.data[i].sum4 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum4;
    }
    if(data.data[i].sum5 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum5;
    }
    if(data.data[i].sum6 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum6;
    }
    if(data.data[i].sum7 != null) {
      tmp_aid[tmp_cnt++] = data.data[i].sum7;
    }
    console.log(tmp_aid[13])
    if(tmp_aid[13] == "")
      tmp_aid[13] = " ";

    res[i] = {
      injuryname: data.data[i].injuryname,
      aid:tmp_aid,
    }
  }
  
  return res;
}

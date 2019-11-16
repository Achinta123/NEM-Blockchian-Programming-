let nem = require("nem-sdk").default;
let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

let common = nem.model.objects.create("common")("password", "c10c40835186ae027c9b23f8be06bfc5493ed3394fae5f5e5a8689bafbbbcaf8"); //TDBBR4V7YRDJG7RIAEVEVX4LOVVAOKCHZWYBTJVS

let transferTransaction = nem.model.objects.create("transferTransaction")("TDBBR4V7YRDJG7RIAEVEVX4LOVVAOKCHZWYBTJVS", 10, "Hello World");

let preparedTransaction = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id);

nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res){
  console.log(res);
}, function(err){
  console.log(err);
})
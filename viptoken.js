let nem = require("nem-sdk").default;
let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

let common = nem.model.objects.create("common")("Test7978","c10c40835186ae027c9b23f8be06bfc5493ed3394fae5f5e5a8689bafbbbcaf8");

let transferTransaction = nem.model.objects.create("transferTransaction")("TCYGRKNKYRMDS636VA4NLU4M3GJZNFDYZERAJWJT", 1, "Sent mosaic");

var mosaicDefinitions = nem.model.objects.get("mosaicDefinitionMetaDataPair");

var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("achin", "vipcoin", 10);

transferTransaction.mosaics.push(mosaicAttachment);

nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function(res){
  var definition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["vipcoin"]);
  var fullName = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);
  mosaicDefinitions[fullName] = {};
  mosaicDefinitions[fullName].mosaicDefinition = definition[vipcoin];

  console.log(definition);
  }, function(err){
  	
    console.log(err);
  });

let WooCommerceAPI = require('woocommerce-api');
let prommpt = require('prompt');

let schema = {
    properties: {
      url: {
        description: "Url de votre site wordpress",
        required: true
      },
      publicKey: {
        description: "Entrez votre clé client",
        required: true
      },
      privateKey: {
          description: "Entrez votre clé secrète",
        required: true
      }
    }
  };
prommpt.start();
prommpt.get(schema, function(err,res){
    console.log("l'url :", res.url, ' as bien été ajouter');
    console.log('la clé Client :', res.publicKey, ' as bien été ajouter');
    console.log('la clé secrète :', res.privateKey, ' as bien été ajouter');

    addProduct(res.url,res.publicKey, res.privateKey);
});
function addProduct(url, publicKey, privateKey){
let WooCommerce = new WooCommerceAPI({
  url: url,
  consumerKey: publicKey,
  consumerSecret: privateKey,
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3' // WooCommerce WP REST API version
});

for (product of data){
  WooCommerce.post('products', product, function(err , product, res){
    console.log(res);
  });
}
}
let data = [
    {
    name: "Serviette jetable",
    type:"simple",
    regular_price:"20€",
    short_description:"Pour Éviter de mettre la serviette mouiller dans le paquet de clope.",
    },
    {
    name: "Gel douche Mazoute!",
    type:"simple",
    regular_price:"40€",
    short_description:"Made in Corsica ~~~~~ by Ferries",
    },
    {
    name: "Lunette de soleil sans verre.",
    type:"simple",
    regular_price:"60€",
    short_description:"Pour profiter pleinement du cagnard méditerranéen!",
    },
    {
    name: "Péruque anti-UV.",
    type:"simple",
    regular_price:"80€",
    short_description:"Pour la sauvegarde des cranes du Sud",
    }];



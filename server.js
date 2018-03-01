'use strict';

const Hapi = require('hapi');//server side https://hapijs.com/tutorials
const MySQL = require('mysql'); //use MySQL DataBase
const Joi = require('joi');//Control Input/OutPut JavaScript objects https://github.com/hapijs/joi 

// Create a server and connect
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

//init DataBase
const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'islamdja1',
    database: 'Lineages'
});

//connect DataBase
connection.connect(function(err) {
  if (err) throw err;
  console.log("DataBase MySQL Connected!");
});

// Add the route GET

//Test firt root in this case  http://localhost:8000/helloworld
server.route({
    method: 'GET',
    path: '/helloworld',
    handler: function (request, reply) {
        return reply('hello world');
    }
});


//Requete1 : Pour récupérer les id et lineage et construire la hierarchie
// http://localhost:8000/lineages
server.route({
    method: 'GET',
    path:'/lineages',
    handler: function (request, reply) {

    connection.query('SELECT id, lineage FROM Lineages',
	    function (error, results, fields) {
		if(error) throw error;
		reply(results);
		console.log("DATA sended");
		});
}
});
//Requete2: Pour récupérer les Clusters en fonction de l'id du lineage (avec param passé en URL
// http://localhost:8000/clustersIdLineage/{uid}
server.route({
    method: 'GET',
    path: '/clustersIdLineage/{uid}',
    handler: function (request, reply) {
    const uid = request.params.uid;

    connection.query('SELECT * FROM Clusters WHERE lineage = "' + uid + '"',
    function (error, results, fields) {
       if (error) throw error;
       reply(results);
       console.log("DATA sended");
    });
    },
   config: {
       validate: {
        params: {
        uid: Joi.string().insensitive()
       }
  }
}
});
//Requete2: Pour récupérer les Clusters en fonction de l'id du lineage (avec param NON passé en URL)
// http://localhost:8000/clustersIdLineage should (Edit Post request) (PAYLOAD mode)

server.route({
    method: 'POST',
    path: '/clustersIdLineage',
    handler: function (request, reply) {
    const uid = request.payload.uid;

    connection.query('SELECT * FROM Clusters WHERE lineage = "' + uid + '"',
    function (error, results, fields) {
       if (error) throw error;
       reply(results);
       console.log("DATA sended");
    });
    },
   config: {
       validate: {
        payload: {
        uid: Joi.string().insensitive()
       }
  }
}
});


//Requete3 : Permet de recuréper les domaines des clusters affichés 
// http://localhost:8000/domainClusters/{uid}
server.route({
    method: 'GET',
    path: '/domainClusters/{uid}',
    handler: function (request, reply) {
    const uid = request.params.uid;

    connection.query('select * from Domains JOIN Genes ON Domains.gene = Genes.id JOIN Clusters ON Genes.cluster = Clusters.id JOIN Lineages ON Clusters.lineage = Lineages.id where Genes.cluster = "' + uid + '"',
    function (error, results, fields) {
       if (error) throw error;
       reply(results);
       console.log("DATA sended");
    });
    },
   config: {
       validate: {
        params: {
        uid: Joi.string().insensitive()
       }
  }
}
});

server.start((err) => {
   if (err) {
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});

Projet "WEB SERVICE API REST NODE JS"
------------------------------------

------------------------------------

#### Auteurs de ce projet
DJARALLAH Brahim [(Contact)](mailto:brahim.djarallah@etudiant.univ-lille1.fr)    

---------------------


##### Utilisation  :

 Instalation :

	node js v8.9.4
		$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
		sudo apt-get install -y nodejs
	Hapi :
		npm install hapi --save
  		npm install --save hapi@16.4.3

npm list hapi

hapi@16.4.3
  ├─┬ catbox@7.1.5
  │ └── joi@10.6.0  deduped
  ├─┬ heavy@4.0.4
  │ └── joi@10.6.0  deduped
  ├── joi@10.6.0 
  ├─┬ podium@1.3.0
  │ └── joi@10.6.0  deduped
  ├─┬ shot@3.4.2
  │ └── joi@10.6.0  deduped
  └─┬ statehood@5.0.3
    └── joi@10.6.0  deduped

Si la version @17 : npm install --save hapi@16.4.3

"joi": "10.6.0"s


Lancement : 
  
1)	pour modifier le package.json (nom de projet/description...)
		sudo npm init

===> RESULTAT ========>

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webservice) 
version: (1.0.0) 
description: ==> entrer descprition
entry point: (server.js) 
test command: s
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/samlillett/master1s2/PJI_71/webservice/package.json:

{
  "name": "webservice",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 


2) lancement de serveur : 
	$ sudo npm start


-------------------------------------

##### Technologies utilisées :
  - Nodejs , hapi , joi , MySQL

-------------------------------------

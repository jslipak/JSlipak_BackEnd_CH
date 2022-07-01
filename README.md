#balance de carga

### Require tenel insada pm2 y forever con => npm i -g pm2 forever
# Servidores en Node
npm run dev

## modo cluster
npm run dev-cluster

## forever
forever start index.js -w --modo=fork --puerto=8080
forever list

# pm2
$ pm2 start index.js --name="Servidor1" --watch -- --puerto=8080
$ pm2 start index.js --name="Servidor2" --watch -i max -- --puerto=8089


## Servidor nginx
instalar el nginx y remplazar con el archivo 

 pm2 start index.js --name="ServidorCluster" --watch -- --puerto=8081 --modo=cluster
 pm2 start index.js --name="ServidorSimple" --watch -- --puerto=8080


## parte de la consigna:
### desconenar nginx prueba 2 y comentar lo de la prueba 1

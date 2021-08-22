Çalıştırmak için öcelikle cihazda kurulu olan PostgreSQL database bilgileri database config file ına(src/config/databaseConfig/local.conf.js) girilmeli.

Sonrasında aşağıdaki adımlar uygulanarak proje 3000 portunda ayağa kaldırılabilir.

yarn install
yarn run sq:rebuild
yarn run start:dev

Proje ayağa kaltıktan sonra aşağıdaki linkteki swagger üzerinden endpointler görüntülenebilir.
http://localhost:3000/api/

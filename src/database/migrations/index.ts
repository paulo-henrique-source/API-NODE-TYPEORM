import { createConnection } from 'typeorm';

createConnection({
    type:'postgres',
    url: 'localhost:3333/',
    name: 'firstconnection'
});

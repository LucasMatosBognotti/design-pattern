import { MyDatabaseClassic } from '../database/my-database-classic.ts';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Lucas', age: 10 });
myDatabaseClassic.add({ name: 'Joao', age: 20 });

myDatabaseClassic.show();

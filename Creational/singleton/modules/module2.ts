import { MyDatabaseClassic } from '../database/my-database-classic.ts';
import './module1.ts';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Maria', age: 30 });
myDatabaseClassic.add({ name: 'Jose', age: 40 });

myDatabaseClassic.show();
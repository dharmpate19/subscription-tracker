import   mongoose  from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
    throw new Error('Please provide a database URI environment inside .env<developement/production>.local file')
}


async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to the database ${NODE_ENV}`);
    } catch (error) {
        console.log("Error connecting to the databse",error);
        process.exit(1);
    }
}

export default connectToDatabase;
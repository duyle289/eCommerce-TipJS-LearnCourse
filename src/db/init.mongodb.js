'use strict';


const mongoose = require('mongoose');

const connectString = 'mongodb://127.0.0.1:27017/testConnectDB';



class Database {
    constructor() {
        this.connect();
    }


    connect() {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
        mongoose.connect(connectString)
            .then(_ => console.log(`connect mongodb success`))
            .catch(err => console.log(err));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance
    }


}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB
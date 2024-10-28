const { MongoClient } = require('mongodb');

module.exports = class Connect {
    constructor() {
        this.url = process.env.MONGO_URI; // URL de conexión
        this.dbName = process.env.MONGO_DB; // Nombre de la base de datos
    }
    async getConnect() {
        try {
            
            console.log(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
            const client = await MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
            const db = client.db(this.dbName);
            return { 
                status: 200, 
                message: "Connection established", 
                data: db 
            };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Connection error", data: error }));
        }
    }
}

import mongoose from "mongoose";

async function conectaNaDatabase() {

mongoose.connect(process.env.DB_CONNECTION_STRING);
 return mongoose.connection;

}

export default conectaNaDatabase

//senha de acesso: ZUesw0Avy6Rjmki8
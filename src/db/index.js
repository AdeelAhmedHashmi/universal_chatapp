import mongoose from "mongoose";
import config from "../config/config.js";

async function dbConnection() {
    try {
        await mongoose
            .connect(`${config.database_url}/${config.database_name}`)
            .then(() => {
                console.log("DB connected on host: ", mongoose.connection.host);
            });
    } catch (err) {
        console.log("DataBase Error: ", err);
        process.exit(1);
    }
}

export default dbConnection;

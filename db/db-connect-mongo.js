const mongoose = require('mongoose')

const getConnection = async () => {
    try {
        const url = 'mongodb://admin:admin@ac-jyqsqvn-shard-00-00.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-01.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-02.ecuhkoo.mongodb.net:27017/softwareseguro2?ssl=true&replicaSet=atlas-j5j5jx-shard-0&authSource=admin&retryWrites=true&w=majority';

        const url2 = 'mongodb://'+process.env.USER+':'+process.env.PASSWORD+'@ac-jyqsqvn-shard-00-00.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-01.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-02.ecuhkoo.mongodb.net:27017/softwareseguro2?ssl=true&replicaSet=atlas-j5j5jx-shard-0&authSource=admin&retryWrites=true&w=majority';

        const url3 = process.env.URL

        await mongoose.connect(url3);

        console.log("Conexion Exitosa");

    } catch (error) {
        console.log(error);
    }
}


module.exports = { getConnection }
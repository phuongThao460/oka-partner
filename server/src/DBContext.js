const { Sequelize } = require("sequelize");

const userDBOptions = {
	dialect: "mssql",
	host: "localhost",
	port: "1433",
	database: "RENTALAPARTMENT",
	username: "sa",
	password: "12345@abc"
};
// const userDBOptions = {
// 	dialect: "mssql",
// 	host: "SQL5050.site4now.net",
// 	port: "1433",
// 	database: "db_a752df_thuecanho",
// 	username: "db_a752df_thuecanho_admin",
// 	password: "thu3c@nh0",
// };
/*
class DatabaseContext{
    constructor(){
        try{
            this.adapter = new Sequelize(userDBOptions);
            this.models = require('./models/init-models')(this.adapter);
            console.log('Service USER :: DBContext initialized');
        }
        catch(error){
            console.error(
                `Service USER :: Error on context initializing :: ${error}`
            );
        }
    }
}
*/
const initDBContext = () => {
	const sequelize = new Sequelize(userDBOptions);
	const context = require("./models/init-models")(sequelize);
	console.log("Init DB thanh cong");
	return context;
};

module.exports = initDBContext;

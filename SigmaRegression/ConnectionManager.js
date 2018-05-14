module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["andun123"] = {
             host: "andun123.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
             port: "6000",
             user: "Andun",
             password: process.env.Password_rdsAndun123,
             database: "TestRDS",
        };
    };
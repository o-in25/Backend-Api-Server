(function(testEnv) {
  if(testEnv) {
      let dbService =  require('../service/db-service');
      dbService.$create({"username":"demo2018", "password":"pass", "email":"2017!!@m.com"}, (res) => {
          console.log(res);
      });

      dbService.$read({'username':'demo'}, (res) => {
          console.log(res);
      });
  }
})(false);
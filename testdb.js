var sql = require('mssql/msnodesqlv8');
var config = {
  connectionString: 'Driver=SQL Server;Server=Gingerbear86;Database=ChurchDB;Trusted_Connection=true;'
};
sql.connect(config, err => {
  new sql.Request().query('SELECT 1 AS justAnumber', (err, result) => {
    console.log(".:The Good Place:.");
    if(err) { // SQL error, but connection OK.
      console.log("  Shirtballs: "+ err);
    } else { // All is rosey in your garden.
      console.dir(result);
    };
  });
});
sql.on('error', err => { // Connection borked.
  console.log(".:The Bad Place:.");
  console.log("  Fork: "+ err);
});
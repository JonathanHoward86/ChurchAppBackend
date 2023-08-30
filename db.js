const sql = require('mssql/msnodesqlv8');

const config = {
  connectionString: 'Driver=SQL Server;Server=Gingerbear86;Database=ChurchDB;Trusted_Connection=true;'
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Database');
    return pool;
  })
  .catch(err => {
    console.log('Database Connection Failed!', err);
    process.exit(1);
  });

async function executeQuery(query, params = []) {
  const pool = await poolPromise;
  const request = pool.request();
  params.forEach((param, index) => {
    request.input(`param${index}`, param);
  });

  try {
    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error('Database error:', error);
    console.error('Query:', query);
    console.error('Params:', params);
    throw error;
  }
}

module.exports = {
  executeQuery
};

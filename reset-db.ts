import mysql from 'mysql2/promise';

async function resetDB() {
  try {
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/');
    console.log('Connected to MySQL server.');
    
    await connection.query('DROP DATABASE IF EXISTS belajar_vibe;');
    console.log('Database dropped (if existed).');
    
    await connection.query('CREATE DATABASE belajar_vibe;');
    console.log('Database belajar_vibe created successfully.');
    
    process.exit(0);
  } catch (error) {
    console.error('Failed to reset database:', error);
    process.exit(1);
  }
}

resetDB();

import mysql from 'mysql2/promise';

async function createDB() {
  try {
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/');
    await connection.query('CREATE DATABASE IF NOT EXISTS belajar_vibe;');
    console.log('Database belajar_vibe created successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to create database:', error);
    process.exit(1);
  }
}

createDB();

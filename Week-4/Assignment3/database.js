import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM user")
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createUser(email, password) {
    const [result] = await pool.query(`
    INSERT INTO user (email, password)
    VALUES (?,?)
    `, [email, password])
    // const id = result.insertId
    // return getNote(id)
}

export async function signupCheck(mail) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE email = ?
    `, [mail])
    return rows.length
}

export async function signinCheck(mail,pass) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE email = ?
    AND password = ?
    `, [mail, pass])
    return rows.length
}

// const notes = await getNotes()
// console.log(notes)

// const note = await getNote(1)
// console.log(note)

// const result = await createNote('email4','email4Pass')
// console.log(result)

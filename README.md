
# Experiment 4 – Displaying Dynamic Content (Read Operations)

## 🚀 How to Run

1. **Open terminal** in your project folder:
   bash
   cd C:\Users\DELL\OneDrive\Desktop\assignment\exp
Install dependencies:

bash
Copy code
npm install
Make sure package.json includes:

json
Copy code
"type": "module"
Start your MySQL server, then open the MySQL client and run:

sql
Copy code
CREATE DATABASE userdb;
USE userdb;
Create and fill the tables:

sql
Copy code
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  author_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO users (username, email, password)
VALUES ('Alice', 'alice@example.com', 'password1'),
       ('Bob', 'bob@example.com', 'password2');

INSERT INTO posts (title, content, author_id)
VALUES ('Welcome to My Blog', 'This is my first post using Node.js and MySQL.', 1),
       ('Learning Express.js', 'Express makes building servers in Node.js easy and efficient.', 1),
       ('Dynamic Content with EJS', 'EJS allows embedding data into HTML templates.', 2);
Run the project:

bash
Copy code
node server.js
Open your browser and go to:

arduino
Copy code
http://localhost:3000

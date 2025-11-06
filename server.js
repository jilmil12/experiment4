import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const sql = `
    SELECT posts.*, users.username AS author_name
    FROM posts
    LEFT JOIN users ON posts.author_id = users.id
    ORDER BY posts.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching posts:", err);
      return res.send("Database error");
    }
    res.render("index", { posts: results });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

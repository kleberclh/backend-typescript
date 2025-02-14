import Express from "express";
import { createUser } from "./controllers/UserController"; // ✅ Importação nomeada

const app = Express();
app.use(Express.json());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/create", createUser); // ✅ Agora o TypeScript reconhece corretamente

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

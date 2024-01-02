import "dotenv/config";
import app from "./src/app.mjs";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});


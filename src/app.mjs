import express from "express";
import conectaNaDatabase from "./config/dbConnect.mjs";
import routes from "./routes/index.mjs";


const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);


// array e função retirados após a inclusão do mongoDB
//const livros = [
  //  {   id: 1,
    //    titulo: "Senhor dos anéis"
    //},
     
    //{   id: 2,
    //    titulo: "Hobbit"
    //}
//];

//function buscaLivro(id) {
  //  return livros.findIndex(livro => {
    //    return livro.id === Number(id);
    //})

//}


//app.use(express.json());



//app.get("/", (req, res) => {
  //  res.status(200).send("Curso do Node.js");
//});

//app.get("/livros", async (req, res) => {
  //  const listaLivros = await livro.find({});
    //res.status(200).json(listaLivros);
//});

//app.get("/livros/:id", (req, res) => {
    //  const index = buscaLivro(req.params.id);
    //res.status(200).json(livros[index]);
//});

//app.post("/livros", (req, res) => {
  //  livros.push(req.body);
    //res.status(201).send("Livro cadastrado com sucesso!");
//});

//app.put("/livros/:id", (req, res) => {
  //  const index = buscaLivro(req.params.id);
    //livros[index].titulo = req.body.titulo;
   // res.status(200).json(livros);
//});

//app.delete("/livros/:id", (req,res) => {
  //  const index = buscaLivro(req.params.id);
    //livros.splice(index, 1);
    //res.status(200).send("Livro removido com sucesso!");
//});

export default app;


import express, { request, response } from "express";


// @types/expless
const app = express();


/**
 * GET    => Buscar uma informação
 * POST   => Inserir uma informação(criar)
 * PUT    => Alterar uma informação
 * DELETE => Remover dados
 * PACH   => Alterar informações especificas
 */


app.get("/test", (request, response) => {
    // REQUEST   => Entrada
    // RRESPONSE => Saida
    return response.send("ola NLW");
});


app.post("/test-post", (request, response) => {
    return response.send("ola NLW metodo post");
});


// http: //localhost: 3000
app.listen(3000, () => console.log("Server is running"));
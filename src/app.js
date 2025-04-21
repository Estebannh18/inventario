/* Importamos al framework express */
import express from "express";
import categoriaRoutes from "./routers/categorias.routes.js";

/* Asignamos a app toda funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server */
app.set("port", 5000);

// Aquí se debe montar el router
app.use("/", categoriaRoutes);

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;

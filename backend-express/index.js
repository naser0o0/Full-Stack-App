import express from "express";
import routes from "./routing/routes.js";

const app = express();
const PORT = 5300;

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

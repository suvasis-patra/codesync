import { app } from "./app";

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));

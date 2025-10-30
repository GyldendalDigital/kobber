import express from "express";
import { render } from "./server.js";

const app = express();

app.get("/", (_req, res) => {
  const html = render();
  res.send(html);
});

app.listen(3001, () => console.log("SSR server running on http://localhost:3001"));

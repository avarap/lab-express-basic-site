// const express = require("express");
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
// import {readdirSync} from fs;

import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/img", express.static(__dirname + "/public/images"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.route("/about").get((req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.route("/works").get((req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.route("/gallery").get((req, res) => {
//   const r = fs.readdirSync(__dirname + "/public/images");
//   r.forEach((value)=>{console.log(value);})
  //res.send(r);

  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log("Hello there, we're listening...");
});

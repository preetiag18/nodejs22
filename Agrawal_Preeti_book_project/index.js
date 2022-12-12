"use strict";

const path = require("path");
const express = require("express");
const app = express();

const { port, host, storage } = require("./serverConfig.json");

const Datastorage = require(path.join(
  __dirname,
  storage.storageFolder,
  storage.dataLayer
));

const dataStorage = new Datastorage();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const menuPath = path.join(__dirname, "menu.html");

app.get("/", (req, res) => res.sendFile(menuPath));

app.get("/getAll", (req, res) =>
  dataStorage.getAll().then((data) => res.render("allBooks", { result: data }))
);

app.get("/getOneBook", (req, res) =>
  res.render("getBook", {
    title: "Get",
    header1: "Get book",
    action: "/getOneBook",
  })
);

app.post("/getOneBook", (req, res) => {
  if (!req.body) return res.sendStatus(500);

  const bookId = req.body.id;
  dataStorage
    .getOne(bookId)
    .then((book) => res.render("bookPage", { result: book }))
    .catch((error) => sendErrorPage(res, error));
});

app.get("/insertbookform", (req, res) =>
  res.render("form", {
    title: "Add Book",
    header1: "Add a new Book",
    action: "/input",
    bookID: { value: "", readonly: "" },
    name: { value: "", readonly: "" },
    author: { value: "", readonly: "" },
    topic: { value: "", readonly: "" },
    numberOfBooks: { value: "", readonly: "" },
  })
);

app.post("/input", (req, res) => {
  if (!req.body) return res.statusCode(500);

  dataStorage
    .insert(req.body)
    .then((status) => sendStatusPage(res, status))
    .catch((error) => sendErrorPage(res, error));
});

app.get("/updatebookform", (req, res) =>
  res.render("form", {
    title: "Update Book",
    header1: "Update Book data",
    action: "/updatedata",
    bookID: { value: "", readonly: "" },
    name: { value: "", readonly: "readonly" },
    author: { value: "", readonly: "readonly" },
    topic: { value: "", readonly: "readonly" },
    numberOfBooks: { value: "", readonly: "readonly" },
  })
);

app.post("/updatedata", (req, res) => {
  if (!req.body) return res.sendStatus(500);

  dataStorage
    .getOne(req.body.bookID)
    .then((book) =>
      res.render("form", {
        title: "Update Book",
        header1: "Update Book data",
        action: "/update",
        bookID: { value: book.bookID, readonly: "readonly" },
        name: { value: book.name, readonly: "" },
        author: { value: book.author, readonly: "" },
        topic: { value: book.topic, readonly: "" },
        numberOfBooks: { value: book.numberOfBooks, readonly: "" },
      })
    )
    .catch((error) => sendErrorPage(res, error));
});

app.post("/update", (req, res) => {
  if (!req.body) return res.statusCode(500);

  dataStorage
    .update(req.body)
    .then((status) => sendStatusPage(res, status))
    .catch((error) => sendErrorPage(res, error));
});

app.get("/removebook", (req, res) =>
  res.render("getBook", {
    title: "Remove",
    header1: "remove",
    action: "/removeBook",
  })
);

app.post("/removeBook", (req, res) => {
  if (!req.body) return res.statusCode(500);
  const bookId = req.body.id;
  dataStorage
    .remove(bookId)
    .then((status) => sendStatusPage(res, status))
    .catch((error) => sendErrorPage(res, error));
});


app.listen(port, host, () => console.log(`Server ${host}:${port} running`));

function sendErrorPage(res, error, title = "Error", header1 = "Error") {
  sendStatusPage(res, error, title, header1);
}

function sendStatusPage(res, status, title = "Status", header1 = "Status") {
  return res.render("statusPage", { title, header1, status });
}


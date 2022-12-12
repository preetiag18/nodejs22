"use strict";

const path = require("path");

const { key, adapterFile, storageFile } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readerWriter.js");
const { statSync } = require("fs");

const storageFilePath = path.join(__dirname, storageFile);

const { adapt } = require(path.join(__dirname, adapterFile));
//console.log(storageFilePath);

async function getAllFromstorage() {
  return readStorage(storageFilePath);
}

async function getOneBookFromstorage(id) {
  return (
    (await readStorage(storageFilePath)).find((item) => item[key] == id) || null
  );
}

async function addBookToStorage(newObject) {
  const storageData = await readStorage(storageFilePath);
  storageData.push(adapt(newObject));
  return await writeStorage(storageFilePath, storageData);
}

async function updateBookStorage(modifiedObject) {
  const storageData = await readStorage(storageFilePath);
  const oldObject = storageData.find(
    (item) => item[key] == modifiedObject[key]
  );
  if (oldObject) {
    Object.assign(oldObject, adapt(modifiedObject));
    return await writeStorage(storageFilePath, storageData);
  }
  return false;
}

async function removeBookFromStorage(id) {
  const storageData = await readStorage(storageFilePath);
  const i = storageData.findIndex((item) => item[key] == id);
  if (i < 0) return false;
  storageData.splice(i, 1);
  return await writeStorage(storageFilePath, storageData);
}


module.exports = {getAllFromstorage,getOneBookFromstorage,addBookToStorage,updateBookStorage,removeBookFromStorage}
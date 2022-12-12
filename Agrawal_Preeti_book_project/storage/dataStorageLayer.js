"use strict";

const { CODES, MESSAGES } = require("./statusCodes");
const {getAllFromstorage,getOneBookFromstorage,addBookToStorage,updateBookStorage,removeBookFromStorage} = require("./storageLayer");

// Datastorage class

module.exports = class Datastorage {
  get CODES() {
    return CODES;
  }

  getAll() {
    return getAllFromstorage();
  };

  getOne(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("--- empty---"));
      } else {
        const result = await getOneBookFromstorage(id);
        if (result) {
          resolve(result);
        } else {
          reject(MESSAGES.NOT_FOUND(id));
        }
      }
    });
  } // end of getOne

  insert(book) {
    return new Promise(async (resolve, reject) => {
      if (book) {
        if (!book.bookID) {
          reject(MESSAGES.NOT_INSERTED());
        } else if (await getOneBookFromstorage(book.bookID)) {
          reject(MESSAGES.ALREADY_IN_USE(book.bookID));
        } else if (await addBookToStorage(book)) {
          resolve(MESSAGES.INSERT_OK(book.bookID));
        } else {
          reject(MESSAGES.NOT_INSERTED());
        }
      } else {
        reject(MESSAGES.NOT_INSERTED());
      }
    });
  } // end of insert

  update(book) {
    return new Promise(async (resolve, reject) => {
      if (book) {
        if (await updateBookStorage(book)) {
          resolve(MESSAGES.UPDATE_OK(book.bookID));
        } else {
          reject(MESSAGES.NOT_UPDATED());
        }
      } else {
        reject(MESSAGES.NOT_UPDATED());
      }
    });
  } //end updated

  remove(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("--- empty ---"));
      } else if (await removeBookFromStorage(id)) {
        reject(MESSAGES.REMOVE_OK(id));
      } else {
        reject(MESSAGES.NOT_REMOVED(id));
      }
    });
  } // end of remove
 };

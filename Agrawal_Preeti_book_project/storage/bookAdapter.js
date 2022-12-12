"use strict";

function adapt(item) {
  return {
    bookID: +item.bookID,
    name: item.name,
    author: item.author,
    topic: item.topic,
    numberOfBooks: +item.numberOfBooks
  };
}
module.exports = { adapt };
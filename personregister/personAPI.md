# Person API

## persons.json

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "age": 30
  },
  {
    "firstname": "Preeti",
    "lastname": "Agrawal",
    "age": 30
  },
  {
    "firstname": "Mary",
    "lastname": "Smith",
    "age": 30
  }
]
```

## Datalayer for persons

## function **search(key,value)**

Function returns an array of person objects. Search criterion is passed to the function as parameters.If pearameters are missing,all persons will be returned.

- search() returns an array of all persons
- search(key,value) returns an array of all matching persons

If no match is found an empty array is returned

## Server usage

## search all persons

http://localhost:3000/persons

same origin fetch: /persons

## search all firstname

http://localhost:3000/persons/firstname?value=Matt

same origin fetch: /persons/firstname?value=Matt

## search all lastname

http://localhost:3000/persons/lastname?value=River

same origin fetch: /persons/lastname?value=River

## search all age

http://localhost:3000/persons/age?value=30

same origin fetch: /persons/age?value=30

## SPA (single page application)

use fetch to get data to tha browser.

## Additional info

Server serves also styles and javascript

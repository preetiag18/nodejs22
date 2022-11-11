## JSON (Javascript Object Notation)

## Documentation

https://www.json.org

## File expension

.json

## Values

- string
- number
- array
- object
- true
- false
- null

### examples

### string

Must be doublequoted
empty string:
""

```json
"this is a string"
"Here is a \"quote\" in the 'middle'"
"hearts symbol is \u2665"
```

### Number

- no leading +
- only one leading 0
- decimal delimiter is .

These are allowed:

```json
0, 0.5, 345.567, 1200, 1.5E10, 2E-2, 2E+2, -1, -11.5, -0-567
```

These are not allowed:

```json
000.34, +20, 00030
```

### Array

Array begins with [ and ends with ].Values in the array are separated by a comma.

#### examples

```json
[1, 2, 3, 4, 5]
["teaxtA", "teaxtB"],
[true, null, false]
[
    {"name":"Leila"},
    {"name":"Matt"}
]

[
    [1,2,3],
    [4,5,6]
]
```

### object

An object begin with { and ends with }. the object consists of comma separated key-value pairs. The key and Value are separated by colon :

#### Example

```json
{
  "firstname": "Matte",
  "lastname": "River"
}
```

```json
{
  "firstname": "Leila",
  "lastname": [
    { "firstname": "Vera", "age": 5 },
    {
      "firstname": "jessa",
      "age": 7
    }
  ]
}
```

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": [1, 2, 3],
  "key": {
    "a": 1,
    "b": "text",
    "c": [7, 8, 9],
    "d": {
      "x": true,
      "y": false,
      "z": null,
      "w": 2
    }
  }
}
```

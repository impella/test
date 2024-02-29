/*
import { hallo } from './testModule.mjs';

console.log(hallo());
*/
import { addItemToArray, removeItemToArray } from './arrayHelpers.mjs'

let persons = [
    {
        id: 0,
        name: "Max",
        hobby: "Pizza essen"
    },
    {
        id: 1,
        name: "Bodo",
        hobby: "Eislaufen"
    },
    {
        id: 2,
        name: "MFelix",
        hobby: "Videospiele"
    }
];

addItemToArray(persons, {
    id: 3,
    name: "Christian",
    hobby: "programmieren"
});

removeItemToArray(persons, {
    id: 1
});

console.log(persons);
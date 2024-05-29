let a = [1, 2, 3];
let b = [4, 5 ,6];
let c = a.concat(b);
console.log(c);
console.log(...a, ...b);

const d = [1, 2, 3, 4];
const [first, ...third] = d;
console.log([first,...third]);


const e = {
    name: "ali",
    value: "Nill",
    class: "one"
}
const {previous, ...newd} = e;
console.log(previous, newd);

const obj1 = [{a:1, b:2, c:3}];
const obj2 = [{d:4, e:5, f:6}];
console.log(...obj1, ...obj2);


const g = ["ali", "ahmed", "aliya"];
const [,,girl]= g;
console.log(girl);
let str1="dabbu";
let str2="bhAbiYa";
console.log(str1);
console.log(str1.length);
console.log(str1[3]);


//TEMPLATE LITERAL
let object={
    item:"pen",
    cost:20,
};
let result=`the item is ${object.item} and price is ${object.cost} `
console.log(result);

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

let str3="   king dabbu don     ";
console.log(str3.trim());

console.log(str2.slice(1,4));

console.log(str1.concat(str2));

console.log(str2.replaceAll("b","m"));

console.log(str1.charAt(2));


//sample question--
let un=prompt("enter user name");

len=un.length;
console.log(len);

z="@"+un+len;

console.log(z.trim());


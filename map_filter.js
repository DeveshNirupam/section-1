const nums =[6,5,8,7,9];
for (i=0; i<nums.length;i++)
{
    console.log(nums[i]**2);
}
console.log("--------------");

for(let n of nums){
    console.log(n**2);
}

console.log("--------------");

//forEach function
nums.forEach((a)=>{console.log(a**2)})


console.log("--------------");

// a= square b=index c=whole array

nums.forEach((a,b,c)=>{console.log(a**4, b,c)})

console.log("--------------");

let newArr =[];

for(let i of nums){
   newArr.push(i**2);
}
console.log(newArr);

console.log("--------------");

const sqrtArr = nums.map((n) =>{return n**2})
console.log(sqrtArr);



console.log("--------------");


const fruits =[ 'apple','grapes','litchi','papaya'];
const upperFruits = fruits.map((item)=> {return item.toUpperCase()})
console.log(upperFruits)

console.log("--------------");

const prices = ['$22.44','$11.89','$45.66'];
const newNum = prices.map((item)=> {return parseInt (item.slice(1))})
console.log(newNum)

console.log("--------------");

const prices2 =[1200, 15000,2000,,8000,4000,2999];
const budgetPrices2= prices2.filter((p)=> {return p<5000});
console.log(budgetPrices2);

console.log("--------------");


const Fruits =[ 'apple','grapes','litchi','papaya','kivi'];
const newFruits= Fruits.filter((p)=> {return p.length<=5 });
console.log(newFruits);

console.log("--------------");

const phoneList = [
    { brand : 'Samsung', model : 'Galaxy M31', price : 14999, color : [ 'Blue', 'Black', 'Red' ] },
    { brand : 'Mi', model : 'A3', price : 19999, color : [ 'Gray', 'Black' ] },
    { brand : 'Apple', model : 'Iphone 15', price : 85000, color : [ 'White', 'Blue', 'Black' ] },
    { brand : 'OnePlus', model : '11T', price : 45000, color : [ 'Green', 'Red' ] }
];
const newPhones= phoneList.filter((p)=> {return p.price<20000 });
console.log(newPhones);

const phoneBrand = phoneList.map((p)=> {return p.brand});
console.log(phoneBrand);

console.log("--------------");

const blackPhones= phoneList.filter((phone)=> {return phone.color.includes('Black') });
console.log(blackPhones);

console.log("--------------");

const samPhones= phoneList.filter((phone)=> {return phone.brand==='Samsung' });
console.log(samPhones);


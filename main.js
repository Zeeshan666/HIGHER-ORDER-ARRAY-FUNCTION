const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
 
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  
  //for vs foreach practise
//   for(let i =0;i<=companies.length;i++){
// document.write(companies[i]+"<br>")
//   }
//foreach
//  companies.forEach(function(x){
//  document.write(x+"<br>");
//  })

  //for vs filter practise get 21 and older
//   canDrink=[];
//   for(let i=0;i<ages.length;i++){
//       if(ages[i]>21){
//        canDrink.push(ages[i]+"<br>")
//       }

//   }

//   document.write(canDrink);
//filter

// const canDrink = 
// let filterages= ages.filter(function(x){
// if(x>21){
// return true
// }
// });

//arrowfunction
// let filterage = ages.filter(age => age >21)

// document.write(filterage);

//filter retail company
// let  comret = companies.filter(function(x){
// if(x.category=="Retail"){
// return true
// }
// })

// console.log(comret)
 // const filterCompany = companies.filter(x => x.category ==="Retail");
// document.write(filterCompany)

// const eightees = companies.filter(y=> y.start >=1981 && y.start<=1994 )
// console.log(eightees)


//map methods
// let companiesnames = companies.map(function(x){
//     return x.name

// })

// console.log(companiesnames);

// let testmap = companies.map(function(x){
// return `${x.name}  [${x.start} - ${x.end}]` 

// })
// console.log(testmap);

let ag = ages.map(x=>Math.sqrt(x))

let age = ages.map(x=>x*2)
document.write(age);
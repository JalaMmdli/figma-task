

const response=await fetch("https://acb-api.algoritmika.org/api/transaction");
const data=await response.json();
console.log(data);

const list=document.querySelector(".transactionList");

data.forEach(x=>{
    list.innerHTML+=`<li>${x.from}-${x.to}-${x.amount}</li>`
})
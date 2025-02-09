let mim = [12,13,14,15];
let mim1 = mim.filter(x => x %2===0);
console.log(mim1);

// عدادی که ضرب در 2 تقسیم بر 3 =15 میشوند را خروجی نشان بدهد

let li = [10,15,19,20,44,50,55,12,34,56,788,193,22.5];
let mim2 = li.filter(x => x*2/3===15);
console.log(mim2);

let ls =[12,13,14,15,6,19,9,5];
let small = ls.filter(x => x <10);
console.log("number small = ",small);
let big = ls.filter(x => x >10);
console.log("number big =",big);


let lf =[12,13,14,15,6,19,9,5];
if (lf.filter(x => x <= 20 && x >= 0)){
    console.log("number is true " , lf);
}else {
    console.log("number is error")
}


let num = 7
let box = ""
for (let i = 0; i < num; i++){
  for (let j = 0; j < num; j++){
    // if(i % 2 == 0 && j % 2 == 2 || i % 2 == 1 && j % 2 == 1 )
    if(i === 0 || i=== 6 || j===0 || j===6 ||i===1 && j ===1 || i===2 && j===2||i===3 && j=== 3||i===4 && j===4|| i===5 && j===5)
    {
       box = box + "[*]"
}
else {
box = box +"   "
}
}
console.log(box);
box=""
}
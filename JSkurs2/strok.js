


document.querySelector('.btn').addEventListener("click", function(){
const text = document.querySelector(".text").value;
const rows = text.split("\n");
let output = []

for(let row of rows){
let [first, second] = row.trim().toLowerCase().split(" ");
output.push(`${first}:${second.replace(second[0], second[0].toUpperCase())}`);
}

document.querySelector(".output").innerText = output.join("\n")

})



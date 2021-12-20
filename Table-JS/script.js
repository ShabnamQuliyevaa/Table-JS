let cedvel = ["3*3", "6*6", "9*9"]
let cedvelS = document.getElementById("cedvel");
let table = document.getElementById("table");

onload = function () {
    let ekran = `<option selected disabled>Cedvel Sec</option>`;
    for(let i=0; i<cedvel.length; i++){
    ekran += `<option value="${(i+1)*3}">${cedvel[i]}</option>`
    }
cedvelS.innerHTML = ekran;
table.style.display="none"
}


cedvelS.onchange = function() {
    let value = cedvelS.value;
let ekran ="";
for (let i=0; i<value; i++){
    ekran+= `<tr>`;
    for(let j=0; j<value; j++){
        ekran+=`<td></td>`;
    }
    ekran+= `</tr>`
}
table.innerHTML = ekran;
table.style.display="table"

}


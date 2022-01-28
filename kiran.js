
// creating an div conatiner
let div = document.createElement("div")
div.setAttribute("class","container")
document.body.appendChild(div)


//  creating an table for form

let table = document.createElement("table")
table.innerHTML = `<tr class="firstrow"></tr>
<br>
<tr class="secondrow"></tr>`
div.appendChild(table)


// created first row
let firstrow = document.querySelector(".firstrow")



// creating form in first row
firstrow.innerHTML = `<form class="formchart"></form>` 


let form = document.querySelector(".formchart")


// creating the text box for box 
// let firstlabel = document.createElement("label")
// firstlabel.innerHTML = "firstname"

// form.appendChild(firstlabel)

// form.innerHTML = `<label>FirstName</label>
// <input type="text" class="firstnametext" value="kiran">
// <input type="text" name="" id="">`

let body = document.getElementsByTagName("body")[0]
form.innerHTML =  `<label>FirstName</label>
<input type="text" class="firstnametext" value="kiran">
<input type="text" name="" id="">`


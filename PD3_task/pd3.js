/*
 * Work in this file.
 *
 */
document.title = "al18011";

var words = [];

for (var i in my_dict) {
    var word = i;
    words.push(i);
}

function tulk(){
    var trans = document.getElementById("word-select");
    var value =  trans[trans.selectedIndex].value;
    document.getElementById("word-output").textContent = my_dict[value];
}

function add_content() {
    document.getElementById('task1-content').innerHTML = "<p>giberish</p>";
    document.getElementById('task1-content').style.color = "blue";
    var task1_para = document.createElement("p");
    var node = document.createTextNode("This is a task1_paragraph!");
    task1_para.appendChild(node);
    var element = document.getElementById("task1-content");
    element.appendChild(task1_para);
    var x = document.getElementById('task1-content').firstChild;
    x.style.color = "red";
}

//Task#2.1
var trans_div = document.getElementById('translation-app');
var trans_btn = document.createElement("button");
var par = document.createElement("p");
trans_btn.innerHTML = "Translate";
var trans_input = document.createElement("input");
trans_div.appendChild(trans_btn);
trans_div.appendChild(trans_input);
trans_div.appendChild(par);
trans_btn.id = "trans_btn";
trans_input.id = "trans_input";
par.id = "trans-par";
trans_input.type = "text";
document.getElementById("trans_input").setAttribute("value", "Please type here");
document.getElementById("trans_input").setAttribute("onfocus", "this.value=''");
document.getElementById("trans_btn").setAttribute("onclick", "tulkot()");
document.getElementById("trans_btn").setAttribute("type", "button");
for (var i=0; i<words.length; i++) {
    var select = document.getElementById("word-select");
    var option = document.createElement("option");
    option.setAttribute("value", words[i]);
    option.textContent = words[i];
    select.appendChild(option);
}
document.getElementById('word-select').addEventListener('click', tulk );

//Task#2.2
function tulkot(){
    par.innerHTML = " ";
    var text = document.getElementById("trans_input").value.toLowerCase();
    var trans_text = text.split(" ");

    for(var i = 0; i < trans_text.length; i++)
    {
        for (var x in my_dict) 
        {   
            if (trans_text[i] == x)
            {
                par.textContent += my_dict[x] + " ";
            }
        }
    }
}

//Task#3 MINE
/* var mult_div = document.createElement("div");
document.body.appendChild(mult_div);
var multhr = document.createElement("hr");
mult_div.id = "mult-table";
document.body.insertBefore(multhr, mult_div);
var in_node1 = document.createElement("input");
var in_node2 = document.createElement("input");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
mult_div.appendChild(in_node1);
mult_div.appendChild(in_node2);
mult_div.appendChild(btn1);
mult_div.appendChild(btn2);
in_node1.id = "mult-in1";
in_node2.id = "mult-in2";
btn1.id = "btn1";
btn2.id = "btn2";
//can't clear from float
document.getElementById("mult-in1").style.cssFloat = "left";
document.getElementById("mult-in2").style.clear = "left";

document.getElementById("btn1").innerText = "Table";
document.getElementById("btn2").innerText = "Clear"; */

//Some teachers code
/*
 * Work in this file.
 *
 */



var words = [];

for (var i in my_dict) {
    var word = i;
    words.push(i);
}

//Task number 3.

window.onload = function(){
    
    console.log('function run');
    document.title = "Roberts Pelle, rp18023";
    
    var inputA = document.getElementById('input_A');
    var inputB = document.getElementById('input_B');
    var buttonTable = document.getElementById('button_table');
    var buttonClear = document.getElementById('button_clear');
    var errorsElement = document.getElementById('errors');
    var tableElement = document.getElementById('table');
    
    buttonTable.onclick = function(){
        var rows = Number(inputA.value);
        var cols = Number(inputB.value);
       
        var errors = [];
        
        if(rows < 1 || rows > 25 || isNaN(rows)){
            errors.push('Input A value is invalid. Must be within 1 - 25');
        }
        
        if(cols < 1 || cols > 25 || isNaN(cols)){
            errors.push('Input B value is invalid. Must be within 1 - 25');
        }
        
        errorsElement.innerHTML = '';
        if(errors.length > 0){
            errorsElement.innerHTML = errors.join('<br>');
            return;
        }
        
        /*
        console.log(rows, cols);
        console.log(errors);*/
        
    tableElement.innerHTML = '';
    
    var table = document.createElement('table');
    
    for(var rowIndex = 0; rowIndex < rows; rowIndex++){
        var tr = document.createElement('tr');
        for(var colIndex = 0; colIndex < cols; colIndex++){
            var td = document.createElement('td');
            td.innerHTML = '(row,col) = (' + rowIndex + ',' + colIndex + ')';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableElement.appendChild(table);
    
    console.log(rows,cols);
    console.log(errors);
    
    };
    
    buttonClear.onclick = function(){
        document.getElementById('input_A').value = "";
        document.getElementById('input_B').value = "";
        tableElement.innerHTML = "";
    };
};

/* 
 * <dl>
    <dt>Greatest musicians of all time</dt>
    <dd>Michael Jackson</dd>
    <dd>Prince</dd>
    <dd>Louis Armstrong</dd>
    <dd>Frank Sinatra</dd>
   </dl>*/

var skaits = 0;

function add_content() {
    /*pirmais variants
        var content = document.getElementById("task1-content").innerHTML = "<h1 color:red>Hello there, boy!</h1>";
    */
    if(skaits === 0){
        var test = document.createElement("h2");
        var buttonPress = document.createTextNode("Greatest musicians of all time");
        test.style = 'background:yellow';
        test.appendChild(buttonPress);
        
        var element = document.getElementById("task1-content");
        element.appendChild(test);
        
        var test2 = document.createElement("ol");
        var buttonPress2 = document.createTextNode("Michael Jackson");
        test2.appendChild(buttonPress2);

        var test3 = document.createElement("ol");
        var buttonPress3 = document.createTextNode("Prince");
        test3.appendChild(buttonPress3);

        var test4 = document.createElement("ol");
        var buttonPress4 = document.createTextNode("Louis Armstrong");
        test4.appendChild(buttonPress4);

        var test5 = document.createElement("ol");
        var buttonPress5 = document.createTextNode("Frank Sinatra");
        test5.appendChild(buttonPress5);

        element.appendChild(test2);
        element.appendChild(test3);
        element.appendChild(test4);
        element.appendChild(test5);

        document.getElementById("task1-content").style.color="red";

        skaits = skaits+1;
    }
    /*otrais variants (OOP pieeja)!
    
    var element = document.createElement('h2');
    element.innerHTML = 'Second element in div';
    element.style = 'color:red;border: 1px solid green;';
    content.appendChild(element);
    document.getElementById("task1-content").innerHTML = element;
    */
   }









function gid(elementId) {
		return document.getElementById(elementId);
}

function deleteAllRows() {
	var myTableObj=gid("mytable");
	var numberOfRows=myTableObj.rows.length;
	// console.log(numberOfRows);
	for (var i=0;i<numberOfRows;i++) {
		myTableObj.deleteRow(0);
	}
}

function createTable() {
    deleteAllRows();
    for(var x=0; x<32;x++) {
      for (var y=0;y<32;y++) {
        currentState[x][y] = 0;
      }
    }
		var myTableObj=gid("mytable");
		var numberOfRows=myTableObj.rows.length;
    for (var i = 0; i < 32; i++){
    var newRow=myTableObj.insertRow(i);
    for (j = 0; j < 32; j++) {
      var newCell = newRow.insertCell(j);
      newCell.style.border = "thin solid black";
      newCell.style.backgroundColor = "#FFFF00";
      newCell.style.width = "10px";
      newCell.style.height = "10px";
      newCell.id = "cell-"+i+"-"+j;
      document.getElementById("cell-"+i+"-"+j).onclick = function() {myClick(this)};
    }
  }
}

currentState=new Array(32);
nextStatus=new Array (32);
for(var o=0; o<32;o++){
  currentState[o]=new Array(32);
  nextStatus[o] = new Array (32);
    for (var p=0;p<32;p++){
      currentState[o][p]=0;
    }
  }

currentState=new Array(32);
nextStatus=new Array (32);
for(var o=0; o<32;o++){
  currentState[o]=new Array(32);
  nextStatus[o] = new Array (32);
    for(var p=0;p<32;p++){
      currentState[o][p]=0;
      nextStatus[o][p]=0;
    }
  }

function myClick(obj) {
  cur = String(obj.id);
  var ident = cur.match(/\d+/g).map(Number);
  var x = ident[0];
  var y = ident[1];
  if (currentState[x][y] == 0) {
    currentState[x][y] = 1;
    obj.style.backgroundColor = "blue";
  } else {
    currentState[x][y] = 0;
    obj.style.backgroundColor = "#FFFF00";
  }
  return x, y;
}

var z = 0;
function initiate() {
  for(var x=1; x<31;x++){
    for (var y=1;y<31;y++){
      var count = 0;
      // console.log("currentState["+x+"]["+y+"]");
      if (currentState[x-1][y-1] == 1) {
        count++;
      }
      if (currentState[x-1][y] == 1) {
        count++;
      }
      if (currentState[x-1][y+1] == 1) {
        count++;
      }
      if (currentState[x][y-1] == 1) {
        count++;
      }
      if (currentState[x][y+1] == 1) {
        count++;
      }
      if (currentState[x+1][y-1] == 1) {
        count++;
      }
      if (currentState[x+1][y] == 1) {
        count++;
      }
      if (currentState[x+1][y+1] == 1) {
        count++;
      }
      // console.log(count);
      if (count == 3) {
        nextStatus[x][y] = 1;
        // console.log("from alive/dead to alive");
      }
      else if (count == 2 && currentState[x][y] == 1) {
        nextStatus[x][y] = 1;
        // console.log("from alive to alive");
      } else {
        nextStatus[x][y] = 0;
        // console.log("from alive/dead to dead");
      }
    }
  }
  var check = true;
  if (check) {
    for(var x=1; x<31;x++) {
      for (var y=1;y<31;y++) {
        if (nextStatus[x][y] == 1) {
          document.getElementById("cell-"+x+"-"+y).style.backgroundColor = "blue";
        } else if (nextStatus[x][y] == 0) {
          document.getElementById("cell-"+x+"-"+y).style.backgroundColor = "#FFFF00";
        }
      }
    }
  }
  for(var x=0; x<32;x++) {
    for (var y=0;y<32;y++) {
      currentState[x][y] = nextStatus[x][y];
      nextStatus[x][y] = 0;
    }
  }


  var callEvent=setTimeout(initiate,1000);
  console.log('Times: '+ z++)
  
}

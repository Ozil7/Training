document.body.style.backgroundColor = "grey";
var checkBoxCount = 1;
var blockCount = 1;
var colors = [ 'green' , 'yellow' , 'aqua', 'violet' , 'blue', 'grey' , 'pink', 'coral', 'lime' , 'maroon' , 'navy'];

 var swap = 1;




function createCheckBox() {
    var a = document.createElement("INPUT");
    a.setAttribute("type" , "checkBox")
    a.setAttribute("id", "checkBox" + checkBoxCount)
    a.checked = false;
    checkBoxCount += 1;
    document.body.appendChild(a);
}
function createBlock() {
    var b = document.createElement("button");
    b.setAttribute("type" , "button")
    b.setAttribute("id", "block" + blockCount)
    blockCount += 1;
    document.body.appendChild(b);
}



createCheckBox();
createCheckBox();
createCheckBox();
createCheckBox();
createBlock();
createBlock();
createBlock();

function changeBackground() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}


function checkAllCheckBox() {
  document.getElementById('checkBox1').checked = true
  document.getElementById('checkBox3').checked = true
  document.getElementById('checkBox2').checked = true
  document.getElementById('checkBox4').checked = true
  // var list = document.getElementsByTagName("input");
  // for (var i = 0; i < list.length ; i++) {
  //   list[i].checked = true
  }


function block2Click() {
  document.getElementById('checkBox1').checked = true
  document.getElementById('checkBox3').checked = true
  document.getElementById('checkBox2').checked = false
  document.getElementById('checkBox4').checked = false
}

function block3Click() {
  document.getElementById('checkBox2').checked = true
  document.getElementById('checkBox4').checked = true
  document.getElementById('checkBox1').checked = false
  document.getElementById('checkBox3').checked = false
}


function swapColor() {
  if (swap) {
    document.getElementById('block2').style.backgroundColor = "blue";
    document.getElementById('block3').style.backgroundColor = "yellow";
    swap = 0;
  } else {
    document.getElementById('block2').style.backgroundColor = "yellow";
    document.getElementById('block3').style.backgroundColor = "blue"
    swap = 1;
  }
}



window.addEventListener('click', changeBackground)
document.getElementById('block1').addEventListener('click', checkAllCheckBox)

document.getElementById('block2').addEventListener('click', block2Click)
document.getElementById('block2').addEventListener('click', swapColor)

document.getElementById('block3').addEventListener('click', block3Click)
document.getElementById('block3').addEventListener('click', swapColor)

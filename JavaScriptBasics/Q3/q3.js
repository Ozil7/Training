
	var f = document.createElement("form");
	f.setAttribute('id',"form1");


var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"create");
i.setAttribute('id',"box1");
// i.setAttribute('style'," left:10px; width:100px");

var j = document.createElement("input"); //input element, text
j.setAttribute('type',"text");
j.setAttribute('name',"eliminate");
j.setAttribute('id',"box2");
// j.setAttribute('style'," left:200px; width:100px");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
s.setAttribute('id',"button1");
// s.setAttribute('style'," left:400px; width:80px");

f.appendChild(i);
f.appendChild(j);
f.appendChild(s);



document.getElementsByTagName('body')[0].appendChild(f);

var a = document.getElementById("button1");
a.addEventListener("click", function(event){
    event.preventDefault()
});
a.addEventListener("click", generateTable);




function generateTable()
{
	var x = document.getElementById("box1").value;
	var y = document.getElementById("box2").value;

	var row = Number(x.substring(1,2));
	var col = Number(x.substring(3,4));

	var rowSpan1 = Number(y.substring(1,2));
	var rowSpan2 = Number(y.substring(3,4));
	var rowSpanDiff = rowSpan2 - rowSpan1;
	var rowFinal = row - rowSpanDiff + 1;
	var colSpan = Number(y.substring(6,7));

	// document.getElementById("display").innerHTML = colSpan;



	
	var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute("id", "myTable")
    tbl.style.width = '100%';
    tbl.style.height = '100px';
    tbl.setAttribute('border-collapse', 'separate');
    tbl.setAttribute('empty-cells', 'hide');
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < row; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute("id", "myrow"+i );
        for (var j = 0; j < col; j++) {
                
            var td = document.createElement('td');
            td.setAttribute("id", "myTd");
            var num = i*col + j+1;
            td.setAttribute("id", "mycell"+num);
            if (i >= 1 && i <=3 && j == 2)
            {
                j++;
                j--;
            }
          else
              td.appendChild(document.createTextNode("mycell"+num));
          $("td:empty").remove();
          tr.appendChild(td);
            

        }
        
        
        tbdy.appendChild(tr);

    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);

     $('myTable tr').each(function() {
    var tr = this;
    var counter = 0;

    $('td', tr).each(function(index, value) {
      var td = $(this);

      if (td.text() == "") {
        counter++;
        td.remove();
      }
    });

    if (counter !== 0) {
      $('td:not(.colTime):first', tr)
        .attr('colSpan', '' + parseInt(counter + 1,10) + '');
    }
  });

  $('td.colspans').each(function(){
    var td = $(this);
    var colspans = [];

    td.siblings().each(function() {
      colspans.push(($(this).attr('colSpan')) == null ? 1 : $(this).attr('colSpan'));
    });

    td.text(colspans.join(','));
  });
    
}


    //removing cells........................................................
//     for(var k = rowSpan1; k <= rowSpan2; k++)
//     {
//     	// cellNum = (k-1)*col + colSpan;

    	

//     	 // document.getElementById("display").innerHTML = rowNum;
//     	//  var row = document.getElementById("myRow");
//     	// row.deleteCell(0);
//  //    	 var myTD=document.getElementById('myTable').getElementsByTagName('tr')[k-1].getElementsByTagName('td')[0];
    	

// 	// 	myTD.parentNode.removeChild(myTD);
// 	// }

// }

// var table = $("#myTable")[0];
    // var cell = table.rows[3].cells[3]; // This is a DOM "TD" element
    // cell.remove();
    // var $cell = $(cell); // Now it's a jQuery object.

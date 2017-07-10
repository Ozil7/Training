
    rowNum = 1;
    rowNumber = 0;
    var count = 0;
    var counter = 0;


  	var a = document.getElementById("button1");
    a.addEventListener("click", function(event){
    event.preventDefault()
    });
  	a.addEventListener("click", showInput); //........................
  	var songs = new Array;
    var playlist;


  	
  	a.addEventListener("click", addList);//...........................


    function song(name, theme, playCount, lastPlayed) {
      this.name = name;
      this.theme = theme;
      this.playCount = playCount;
      this.lastPlayed = lastPlayed;
    }



  	 
    function showInput() {
        var x = document.getElementById("songname").value;
        if (x == "")
        	alert("Song Name must be filled out");
    }


   



    function updatePlaylist()
    {

        var table = document.getElementById("table1");
        var rowCount = table.rows.length;
        var z = rowCount;
        if (rowCount > 1)
        {
            for (var i = 1; i < z; i++) 
            
            table.deleteRow(1);
            
          
        }

        

        var numberOfSongs = playlist.length
        if (numberOfSongs <= 4)
          limit = numberOfSongs;
        else
          limit = 4;

        for (var i =0; i < limit; i++)
        {
           var table = document.getElementById("table1");
           var row = table.insertRow(i+1);

           if (playlist[i].playCount > 0)
           {
               var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = playlist[i].name;
            cell2.innerHTML = playlist[i].theme;
            cell3.innerHTML = playlist[i].playCount;
            cell4.innerHTML = playlist[i].lastPlayed;
           }

           
        }

        

    }



    function addList()
    {
    	 var b = document.getElementById("songname").value;
    	 var c = document.getElementById("songtheme").value;
    	 songs.push(new song(b,c,0,0));
       

    	   
    	 var table = document.getElementById("table2");
    	 var row = table.insertRow(rowNum);
    	 row.id = rowNum;

    	 var cell1 = row.insertCell(0);
		  var cell2 = row.insertCell(1);
		  var cell3 = row.insertCell(2);
		  var playBtn = document.createElement("button");
		  playBtn.setAttribute("type", "button" );
      playBtn.setAttribute("id", "button3"+rowNumber );

		  var text = document.createTextNode("PLAY");
		  playBtn.appendChild(text);



      playBtn.addEventListener("click" , runTimer);
      playBtn.addEventListener("click" , updateCount);
      playBtn.addEventListener("click" , updatePlaylist);
      

		  cell1.innerHTML = b;
		  cell2.innerHTML = c;
		  cell3.appendChild(playBtn);

		  rowNum = rowNum + 1;
      rowNumber = rowNumber + 1;

    }

   
   function runTimer() {

        var id = this.getAttribute('id');
        document.getElementById(id).innerHTML = 'Play';
        var timeleft = 0;
        var downloadTimer = setInterval(function(){
        timeleft++;
        document.getElementById(id).innerHTML = timeleft;
        if(timeleft == 5)
          clearInterval(downloadTimer);
        if (timeleft == 0)
          document.getElementById(id).innerHTML = "Play"
        },1000);
    }




   function updateCount()
   {
      var id = this.getAttribute('id');
      var row = id.slice(7);
      // // console.log(row);

      songs[row].lastPlayed = Date();
      songs[row].playCount += 1;

      playlist = songs.slice().sort (function(a, b) {
      return b.playCount - a.playCount || b.lastPlayed > a.lastPlayed});

   }

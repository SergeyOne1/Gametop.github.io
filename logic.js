/////////////
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
var
 pers                      = new Image(),
 menu                      = new Image(),
 bomb                      = new Image(),
	вишня                     = new Image(),
	
	help                      = new Image(),
	back                      = new Image(),
	starts                     = new Image(),
    legko                     = new Image(),
    medium                    = new Image(),
    difficult                 = new Image(),
    fon                       = new Image();
var выстрел                   = new Audio(),
    music                     = new Audio();
var sizepers                  = 50         , 
    score                     = 0          , 
	sizebutW                  = 200        ,
	sizebutH                  = 60         ,
	Wbut                      = 380        ,
	HbutSlohnosti             = 200        ,
	HbutStart                 = 100        ,
	Hbuthelp                  = 300        ,
	HbutНазад                 = 350        ,
	idbut                     = 0          ,
	сцена                     = 3          ,
	dostarta                  = 5          ,
	clicktime                 = 0          ,
	time                      = 0          ;
	
	
	
	//start.onload = drawImageActualSize;
music.src   ="audio/music.mp3";
выстрел.src ="audio/выстрел.mp3";
back.src = "img/back.png";
help.src = "img/help.png";
bomb.src   ="img/bomb.png";
menu.src   ="img/menu.png";
legko.src  ="img/legko.png";
medium.src ="img/medium.png";
difficult.src ="img/difficult.png";
starts.src  ="img/starts.png";
fon.src    ="img/fon.png";
вишня.src  ="img/вишня.png";
pers.src   ="img/персонаж.png";

var  times = 1000;
//music = onload;

//window.onload = function(){
	
//if(start.onload == false){
	//console.log("норм");
//}
//}

//start.onload;

function Main (){

	ctx.drawImage(fon ,0,0,950,450);
	ctx.fillStyle = "#000";
     ctx.font = "14px Arial";
	 ctx.fillText("V 1.0"  , 900, 430);
	if(сцена== 0){
	//ctx.beginPath();
	
	ctx.drawImage(starts,Wbut ,HbutStart, sizebutW, sizebutH);
	
	//ctx.stroke();
	if(idbut == 0){
	
	ctx.drawImage(legko, Wbut ,HbutSlohnosti, sizebutW, sizebutH);
		
	}
	if(idbut == 1){
		
	ctx.drawImage(medium, Wbut ,HbutSlohnosti, sizebutW, sizebutH);
		
	}
	if(idbut == 2){
	
	ctx.drawImage(difficult, Wbut ,HbutSlohnosti, sizebutW, sizebutH);
		
	}

	ctx.drawImage(help, Wbut ,Hbuthelp, sizebutW, sizebutH);
	
	}
	if(сцена== 1){
		
  ctx.fillStyle = "#000";
     ctx.font = "20px Arial";
 ctx.fillText("Время: " + time, 800, 50);
 ctx.fillText("Счет: " + score, 800, 20);
 if(dostarta !=0){
 ctx.font = "64px Arial";
 ctx.fillText( dostarta, 450, 200);
 }
 if(dostarta ==0){
	
	 if(time <=59 ){
		 switch(ran){
			 case 0:ctx.drawImage(bomb ,width,height,sizepers,sizepers);
	         
	 break;
	 case 1:ctx.drawImage(вишня ,width,height,sizepers,sizepers);
	 break;
	 default: ctx.drawImage(pers ,width,height,sizepers,sizepers);
	 break;
	 
		 }
	 }
	 if(time>= 60){
		 butmenu =  ctx.drawImage(menu, Wbut ,HbutSlohnosti , sizebutW, sizebutH);
		
		  ctx.fillText( "Конец игры вас счет: " +score, 370, 100);
		   ctx.fillText( "Выйти в главное ", 400, HbutSlohnosti - 10);
		clearInterval(тайм);
		clearInterval(setTime);
	 }
 }
}
if(сцена ==2){
	ctx.font = "18px Arial";
	ctx.drawImage(pers ,25,25,sizepers,sizepers);
	ctx.fillText( "При клике на этот объект вам дают 1 очко" , 80, 60);
	ctx.drawImage(вишня ,25,100,sizepers,sizepers);
	ctx.fillText( "При клике на этот объект вам дают -5 секунд" , 80, 130);
	ctx.drawImage(bomb ,25,175,sizepers,sizepers);
	ctx.fillText( "При клике на этот объект вам дают +5 секунд" , 80, 200);
	ctx.fillText( "Вам дают как минимум 60 секунд чтобы вы как можно больше набрать очком пока время не закончилось" , 25, 300);
	ctx.drawImage(back ,Wbut,HbutНазад,sizebutW,sizebutH);
}

}
window.onload =  function(){
setInterval(Main,1000/60);
}





function таймер() {
	music.play();
	
	if(dostarta != 0){
		dostarta--;	
	}
	else{
		time++;	
	}
	}
function musicl (){
	music.play();
}

function spawn (){
	if(idbut==3){
	 ran = Math.floor(Math.random()* (5 -1 +1));	
	}
	else{
		ran = Math.floor(Math.random()* (10 -1 +1));
	}
     width = Math.floor(Math.random()* (750 -1 +1));
     height = Math.floor(Math.random()* (400 -1 +1));
}




can.addEventListener('mouseup', function (e) {
    var x = e.pageX - e.target.offsetLeft,
        y = e.pageY - e.target.offsetTop;
		
		выстрел.play();
		if(сцена == 0){
		 if(x >=Wbut && y >= HbutStart){
			resultbutstartX = Wbut          +  sizebutW ;
			resultbutstartY = HbutStart     +  sizebutH;
			 if(resultbutstartX>= x && resultbutstartY >= y){
				сцена=1;
				 
			   тайм = setInterval(таймер,1000);
				
				if(idbut==0){
			setTime	= setInterval(spawn,1250);
				}
				if(idbut==1){
			setTime	= setInterval(spawn,times);
				}
				if(idbut==2){
			setTime	= setInterval(spawn,900);
				}
			 }
		 }
		if(x >=Wbut && y >= HbutSlohnosti ){
			resultbutX = Wbut          + sizebutW ;
			resultbutY = HbutSlohnosti + sizebutH ;
			if(resultbutX>= x && resultbutY >= y){
			idbut++;
			if(idbut == 3){idbut = 0;}
			}
		}
		//////////////////////////
		if(x >=Wbut && y >= Hbuthelp ){
			resultbutX = Wbut     + sizebutW ;
			resultbutY = Hbuthelp + sizebutH ;
			if(resultbutX>= x && resultbutY >= y){
			сцена=2;
			}
		}
		
		
		}
		
		if(dostarta ==0){
		if(x >=width && y >= height){
			resultX = width + sizepers +  50;
			resultY = height + sizepers + 50;
			if(resultX>= x && resultY >= y){
				width= -100;
				height= -100;
				if(ran == 0 ){
					time+=5;
				}
				if(ran == 1 ){
					time-=5;
				}
			
				if(ran != 1 || ran != 0 ){
					
				score++;
				clicktime++;
				if(clicktime == 5){
					time--;
					clicktime = 0;
				}
				}
			}
			
		}
		}
		
		
		
		if(сцена == 1){
			if(time>= 60){
		if(x >=Wbut && y >= HbutSlohnosti ){
			resultbutX = Wbut          + sizebutW ;
			resultbutY = HbutSlohnosti + sizebutH ;
			if(resultbutX>= x && resultbutY >= y){
				сцена=0;
				score= 0;
				time= 0;
				dostarta = 5;
			}
		}
			}
		}
		
		
		if(сцена == 2){
			if(x >=Wbut && y >= HbutНазад ){
			resultbutX = Wbut     + sizebutW ;
			resultbutY = HbutНазад + sizebutH ;
			if(resultbutX>= x && resultbutY >= y){
			сцена=0;
			}
		}
		}
		if(сцена== 3){
			сцена = 0;
			
		}
});





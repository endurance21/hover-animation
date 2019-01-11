
 var canvas=document.querySelector('canvas');
   canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;
canvas.style.backgroundColor="black";
  var c=canvas.getContext('2d');


  var colors=['#85144b',"#0074D9",'#D8C3A5','#FF851B'];

 function Circle(x,y,dx,dy,radius)
 { this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius=radius;

         this.draw=function(){
                              c.beginPath();
                              c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
                              c.strokeStyle="green";
                              c.stroke();

                              
                              c.fillStyle=colors[Math.floor(Math.random()*colors.length)];
                              c.fill();

                            }

         this.update=function()
             {        
 
               if (this.x+this.radius>innerWidth||this.x-this.radius<0)

                      { this.dx=-this.dx;
                  
                       }
               if( this.y+this.radius>innerHeight||this.y-this.radius<0)

                    { this.dy=-this.dy
                     }
              this.x+=this.dx;
              this.y+=this.dy;

  if(this.x-mouse.x<100&&this.x-mouse.x>-100&&this.y-mouse.y<100&&this.y-mouse.y>-100)
   { if(this.radius<40)
  	{ this.radius+=1;
  		  

  	}
   }
  else if(this.radius>5)
  	{ this.radius-=1;
  	}







  








              this.draw();

 
          } 
 }  
 

 var circlearray=[];
 
 for(var i=0; i<300; i++)
 	{   var x=Math.random()*innerWidth;
      var y=Math.random()*innerHeight;
      var dx=(Math.random()-0.5);
        var dy=(Math.random()-0.5);
        var radius=Math.random()*5;

    circlearray.push(new Circle(x,y,dx,dy,radius));
 	}



var mouse =
{ x:undefined,y:undefined};

 

window.addEventListener('mousemove',function(event){ 
 mouse.x=event.x;
 mouse.y=event.y;
  

  }
 ); 


function animate()
{

  requestAnimationFrame(animate);
   c.clearRect(0,0,innerWidth,innerHeight);
       for(var i=0; i<circlearray.length; i++)
       	{ 
       	   circlearray[i].update();

       	}
   }

animate();












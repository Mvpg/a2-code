var ctx = document.getElementById('ctx').getContext('2d');
var property = document.getElementById('ctx');

property.setAttribute('width','800');
property.setAttribute('height', '600');

var tomacash = 0;

var button = {
  x: 400,
  y: 300,
  w:50,
  h:25
}

property.addEventListener('mousedown', function() {
    if ((button.x<button.y) || (button.y>button.h && button.y+button.h)) {
      tomacash++
      return(tomacash);
    }
});

var drawHud = {
  button: function(button){
    ctx.fillStyle = 'grey';
    ctx.fillRect(button.x-15, button.y,button.w, button.h);
    ctx.fillStyle = 'white';
    ctx.fillText('Click',button.x,button.y+15);
    ctx.fillStyle = 'black';
    ctx.fillText('Click button to get tomacash', button.x-54, button.y+45);
  },

  cash: function(){
    ctx.fillStyle = 'grey';
    ctx.fillText(tomacash, 30, 30);
  }
}

function draw(){
  ctx.clearRect(0,0,800,600);
  drawHud.button(button);
  drawHud.cash();
}

setInterval(draw, 100);

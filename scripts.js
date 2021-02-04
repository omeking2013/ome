$(document).ready(function(){
      
  function notify(item,count) {
    var b = document.getElementById('box')
    var html

    html += '<div class="notify"><div class="icon"><img src= https://i.ibb.co/nnJ6X0w/WEAPON-PISTOL.png /></div><div class="text"><h1>' +item+ ' <br>x ' +count+ '</h1></div></div>'
    b.insertAdjacentHTML('beforeend' ,html);
    
  }

  function listen() {
    notify('Pistol',1) 
  }

});
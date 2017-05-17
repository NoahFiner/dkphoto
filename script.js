$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //shuffle array
  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  }

  //intro won't make sense if javascript is disabled
  $("#intro-center").removeClass("hidden");

  //intro
  var introAnimation = function(time) {
    var descs = ["dependable", "beautiful", "intimate", "affordale", "from friends", "amazing", "incredible", "awesome", "sick", "dope", "lit", "cool", "wonderful", "electrifying", "nice", "priceless", "compassionate", "adventerous", "amiable", "courageous", "competitive", "courteous", "empathetic", "exuberant", "generous", "inventive", "innovative", "persistent", "reliable", "sincere", "witty", "bright", "calm", "careful", "creative", "artistic", "artsy", "dynamic", "faithful", "honest", "imaginative", "pioneering", "practical", "peaceful", "reserved", "sensitive", "sympathetic", "thoughtful", "versatile", "understanding"];
    descs = descs.concat(descs);
    shuffle(descs);
    for(i = 0; i < descs.length; i++) {
      var highlighted = (Math.random() < 0.1) ? "highlighted" : "";
      $("#intro-descs").append("<p class='descs hidden "+highlighted+"' style='transition: opacity 0.25s, transform 0.25s, -webkit-trasnform 0.25s; transition-delay: "+(i*0.025*Math.random())+"s'>"+descs[i]+"</p>");
    }
    setTimeout(function() {$(".descs").removeClass("hidden")}, 100);
    setTimeout(function() {$(".descs").addClass("hidden")}, 100 + time);
    setTimeout(function() {$(".descs").remove()}, time + descs.length*0.025*1000);
  }

  introAnimation(4000);
  setInterval(function() {introAnimation(4000)}, 7000);

  //gallery
  var imgsHidden = true;
  var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"];
  var addImgs = function() {
    $("#loading").remove();
    imgsHidden = false;
    for(i = 0; i < imgs.length; i++) {
      $("#gallery-outer").append("<img id='"+imgs[i]+"' src='img/"+imgs[i]+"' class='photo' />");
    }
  }

  if($(window).scrollTop() > ($("#gallery-outer").offset().top - 1000) && imgsHidden) {
    addImgs();
  }
  $(window).scroll(function() {
    if($(window).scrollTop() > ($("#gallery-outer").offset().top - 1000) && imgsHidden) {
      addImgs();
    }
  });

});

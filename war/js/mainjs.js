/**
 * Main JavaScript file
 */

$(document).ready(function(){
    $("#home").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("主页");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#chineseculturalrevolution").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("文化大革命");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#junefourthincident").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("六四事件");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#falungong").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("法轮功");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#communistpartyofchina").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("中国共产党");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#chinesecivilwar").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("国共内战");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#hongkong").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("香港");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#chineseexclusionact").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("排华法案");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#taiwan").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("台湾");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#tibet").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("西藏");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    $("#chinesetravelers").hover(function() {
        var $this = $(this); // caching $(this)
        $this.data('initialtext', $this.text());
        $this.text("中国旅行团");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialtext'));
    });
    
});


$(document).ready(function(){

    $("#show_login").click(function(){
     showpopup();
    });
    $("#close_login").click(function(){
     hidepopup();
    });

 });


 function showpopup()
 {
    $("#loginform").fadeIn();
    $("#loginform").css({"visibility":"visible","display":"block"});
 }

 function hidepopup()
 {
    $("#loginform").fadeOut();
    $("#loginform").css({"visibility":"hidden","display":"none"});
 }
 
 
 
 $(document).ready(function(){

     $("#show_signup").click(function(){
      showpopup2();
     });
     $("#close_signup").click(function(){
      hidepopup();
      hidepopup2();
     });

  });


  function showpopup2()
  {
     $("#signupform").fadeIn();
     $("#signupform").css({"visibility":"visible","display":"block"});
  }

  function hidepopup2()
  {
     $("#signupform").fadeOut();
     $("#signupform").css({"visibility":"hidden","display":"none"});
  }
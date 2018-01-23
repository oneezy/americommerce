console.log('plugins');

// Browser Sniffing
function detectBrowser() {
    var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    var browser;
    
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
      browser = "edge";
    } else {
      browser = ua[1].toLowerCase();
    }
    
    // $('body').append('div').addClass(browser);
    $('body').append($('<div>', {class: browser}));
  
  }
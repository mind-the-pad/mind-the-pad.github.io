let default_opt = 'valid';

function main() {
  render_convolution(default_opt);
  rendered[default_opt] = true;
}

function selectTab(evt, opt) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(opt).style.display = "block";
  evt.currentTarget.className += " active";

  kernal_size = 3;
  window.clearInterval(timer);
  render_convolution(opt);
}

main()
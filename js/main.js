let default_opt = 'valid';
let baseColors = d3.interpolatePlasma,
    colorScale = {};

let paused = true;

function main() {
  render_convolution(default_opt);

  rendered[default_opt] = true;
}

function selectTab(evt, opt) {
  // Declare all variables
  let i, tabcontent, tablinks;

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
  dilation_factor = 1;
  window.clearInterval(timer);

  if (opt == 'symmetric') {
    intialize_symmetric_setting(symmetric_val);
  }
  render_convolution(opt);
}

function click_symmetric(evt, val) {
  symmetric_val = val;
  intialize_symmetric_setting(val);

  // Get all elements with class="tablinks" and remove the class "active"
  let opts = document.getElementsByClassName("opts");
  for (i = 0; i < opts.length; i++) {
    opts[i].className = opts[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  evt.currentTarget.className += " active";

  window.clearInterval(timer);
  render_convolution('symmetric');
}

function intialize_symmetric_setting(val) {
  switch (val) {
    case 1:
      kernal_size = 3;
      display_size['symmetric'] = 3;
      pad_size['symmetric'] = 1;
      dilation_factor = 1;
      break;
    case 2:
      kernal_size = 5;
      display_size['symmetric'] = 5;
      pad_size['symmetric'] = 2;
      dilation_factor = 1;
      break;
    case 3:
      kernal_size = 3;
      display_size['symmetric'] = 3;
      pad_size['symmetric'] = 2;
      dilation_factor = 2;
  }
}

function click_play(opt) {
  window.clearInterval(timer);
  d3.select(`#${opt}_play`)
    .attr("src", "icon/pause.png")
    .on("click", d => click_pause('valid'))
  timer = window.setInterval(() => update_demo(opt), 500); 
  paused = false;
}

function click_pause(opt) {
  window.clearInterval(timer);
  d3.select(`#${opt}_play`)
    .attr("src", "icon/play.png")
    .on("click", d => click_play('valid'))
  paused = true;
}

function click_next(opt) {
  if (paused) {
    update_demo(opt);
  }
}

function click_previous(opt) {
  if (paused) {
    update_demo(opt, true)
  }
}

main()
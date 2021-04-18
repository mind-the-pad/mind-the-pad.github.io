 
 let input_display = {
 	'basic': [['a', 'b', 'c', 'd', 'e', 'ba', 'bb', '...', '...', ], 
 			  ['f', 'g', 'h', 'i', 'j', 'bc', 'bd', '...', '...'], 
 			  ['k', 'l', 'm', 'n', 'o', 'be', 'bf','...', '...'], 
 			  ['p', 'q', 'r', 's', 't', 'bg', 'bh', '...', '...'], 
 			  ['u', 'v', 'w', 'x', 'y', 'bi', 'bj','...', '...'], 
 			  ['bk', 'bl', 'bm', 'bn', 'bo', 'bp', 'bq','...', '...'], 
 			  ['br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx','...', '...'], 
 			  ['...', '...', '...', '...', '...', '...', '...', '...', '...',], 
 			  ['...', '...', '...', '...', '...', '...', '...', '...', '...',]],
 	// 'zero': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'circular': [['a', 'b', 'c', 'd', 'e','f', 'g'], 
 				 ['x', '...', '...', '...', '...', '...', 'h'], 
 				 ['w', '...', '...', '...', '...', '...', 'i'], 
 				 ['v', '...', '...', '...', '...', '...', 'j'], 
 				 ['u', '...', '...', '...', '...', '...', 'k'], 
 				 ['t', '...', '...', '...', '...', '...', 'l'], 
 				 ['s', 'r', 'q', 'p', 'o', 'n', 'm']],
 	// 'symmetric': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	// 'reflect': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	// 'replicate': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	// 'partial_conv': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 },

demo_display = {
 	// 'valid': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	// 'zero': [['0', '0', '0', '0','...', '...',], ['0', 'a', 'b', 'c', '...', '...', ], ['0', 'd', 'e', 'f', '...', '...'], ['0', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	// 'circular': [['e', 'g', 'f', 'e', 'g'], ['c', 'a', 'b', 'c', 'a'], ['d', 'h', '...', 'd', 'h'], ['e', 'g', 'f', 'e', 'g'], ['c', 'a', 'b', 'c', 'a']],
 	// 'symmetric': [['a', 'a', 'b', 'c','...', '...',], ['a', 'a', 'b', 'c', '...', '...', ], ['d', 'd', 'e', 'f', '...', '...'], ['g', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	// 'reflect': [['e', 'd', 'e', 'f','...', '...',], ['b', 'a', 'b', 'c', '...', '...', ], ['e', 'd', 'e', 'f', '...', '...'], ['h', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	// 'replicate': [['a', 'a', 'a', 'b', 'c', '...', '...',], ['a', 'a', 'a', 'b', 'c', '...', '...',], ['a', 'a', 'a', 'b', 'c', '...', '...', ], ['d', 'd', 'd', 'e', 'f', '...', '...'], ['g', 'g', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...', '...'], ['...','...', '...', '...', '...', '...', '...']],
 	// 'partial_conv': [['', '', '', '','', '',], ['', 'a', 'b', 'c', '...', '...', ], ['', 'd', 'e', 'f', '...', '...'], ['', 'g', 'h', 'i', '...', '...'], ['', '...', '...', '...', '...', '...'], ['', '...', '...', '...', '...', '...']],
 };

 let tot_conv_involved = {
 	'circular': [[9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9, 9, 9]],
 }

 let used_display = {
 	3: [["", "", ""], ["", "", ""], ["", "", ""]],
 	5: [["", "", "", "", ""],
	 	["", "", "", "", ""],
	 	["", "", "", "", ""],
	 	["", "", "", "", ""],
	 	["", "", "", "", ""],]
 };

 let display_size = {
 	'valid': 3,
 	'zero': 3,
 	'circular': 3,
 	'symmetric': 3,
 	'reflect': 3,
 	'replicate': 5,
 	'partial_conv': 3
 }, pad_size = {
 	'valid': 0,
 	'zero': 1,
 	'circular': 1,
 	'symmetric': 1,
 	'reflect': 1,
 	'replicate': 2,
 	'partial_conv': 1,
 },
 symmetric_val = 0,
 dilation_factor = 1;

 let rendered = {}, calculated = true, used_x, used_y;

 let select_pixel = {}, timer;
 let kernal_size = 3, rendered_conv = 0, st_x, st_y, select_x, select_y, select_val;

 let last_x, last_y;

 function render_convolution(opt) {
 	// clear pixel selection
 	d3.selectAll(`#${opt}_input tbody *`).remove();
 	d3.selectAll(`#${opt}_totops tbody *`).remove();
 	d3.selectAll(`#${opt}_demo tbody *`).remove();
 	d3.selectAll(`#${opt}_used tbody *`).remove();
 	d3.select(`#${opt}_select`).html('___');
 	d3.select(`#${opt}_turn`).html('___');

 	// set pause clickable
 	d3.select(`#${opt}_play`)
 		.attr("src", "icon/pause.png")
 		.on("click", d => click_pause(opt));

 	d3.select(`#${opt}_totops`)
 		.style('margin-top', '25px');

  	paused = false;

 	// initialize
 	if ( opt === 'symmetric') {
 		rendered[opt] = true;
 		// clear
 		d3.selectAll('#symmetric_input').remove();
 		d3.selectAll('#symmetric_demo tr').remove();
 		d3.selectAll('#symmetric_totops tr').remove();
 		d3.selectAll('#symmetric_used tr').remove();
 	}
 	// rerender
 	initialize_static_table(opt);
 }


function initialize_static_table(opt,) {
	// add tooltip for play/pause/previous/next
	d3.select(`#${opt}_previous`)
		.attr('title', 'check the previous convlution');

	d3.select(`#${opt}_play`)
		.attr('title', 'play/pause animation');

	d3.select(`#${opt}_next`)
		.attr('title', 'check the next convlution');

	// clear 
 	d3.select(`#${opt} .summary_div img`).remove();
 	d3.select(`#${opt} .summary_div span`).remove();
 	d3.select(`#${opt}_input`).remove();

	// render interaction hint
	let input_node = d3.select(`#${opt} .summary_div`)

	input_node.append('img')
		.attr('src', "/icon/pointer.png")
		.attr('class', 'pointer_img')

	input_node.append('span')
		.text('Click a pixel below')
	 	.attr('class', 'pointer')

	input_node.append('table')
		.attr('id', `${opt}_input`)
		.attr('class', 'input_table')
		.append('tbody')

	// render input table 
	let input_table = d3.select(`#${opt}_input tbody`);

	let input_display_to_render = [];

	if (opt == 'circular') {
		input_display_to_render = input_display[opt]
	} else {
		input_display_to_render = input_display['basic'];
	}
	input_display_to_render.forEach((row, i) => {
		if (opt !== 'circular' && i >= input_display_to_render.length-2) return;

		let row_to_render = [];
		if (opt !== 'circular') {
			row_to_render = row.slice(0, row.length-2);
		} else {
			row_to_render = row;
		}
		input_table.append('tr')
			.selectAll('td')
			.data(row_to_render).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-input-${i}-${j}`)
			.html(d => d.length==2 ? '...' : d)
			.on('click', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (opt === 'circular' && input_display[opt][ii][jj] === '...') {
					return;
				} else if (opt !== 'circular' & (ii > 4 || jj > 4)) {
					return;
				}
				
				// reset 
				if (select_pixel[opt]) {
					d3.select(`#${opt}-input-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-totops-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', baseColors(colorScale[opt](tot_conv_involved[opt][select_pixel[opt][1]][select_pixel[opt][2]])))
					d3.select(`#${opt}-demo-${select_pixel[opt][1]+pad_size[opt]}-${select_pixel[opt][2]+pad_size[opt]}`)
						.style('font-weight', 'normal');
				}

				// set pause clickable
			 	d3.select(`#${opt}_play`)
			 		.attr("src", "icon/pause.png")
			 		.on("click", d => click_pause(opt))
  				paused = false;

				// highlight
				this.style.backgroundColor = highlight_background;
				d3.select(`#${opt}-totops-${ii}-${jj}`)
					.style('background-color', highlight_background);
				select_pixel[opt] = [d, ii, jj];

				d3.select(`#${opt}_select`).html(d);

				d3.select(`#${opt}-demo-${ii+pad_size[opt]}-${jj+pad_size[opt]}`)
					.style('font-weight', 'bold')

				// update summary overview
				update_used_table(opt, ii, jj);
				calculated = true;

				// render animation 
				rendered_conv = 0;
				select_x = ii, select_y = jj, select_val = this.innerHTML;
				st_x = Math.max(0, ii+pad_size[opt]-kernal_size+1);
				st_y = Math.max(0, jj+pad_size[opt]-kernal_size+1);

				if (opt !== 'valid' && opt !== 'zero') {
					last_x = 0, last_y = 0;
				}

				window.clearInterval(timer);
				timer = window.setInterval(() => update_demo(opt), 500); 
			})
			.on('mouseover', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (opt !== 'circular' && (ii > 4 || jj > 4)) {
					return;
				}

				if (!select_pixel[opt] || select_pixel[opt][0] != d) {
					this.style.backgroundColor = 'lightgrey'
					d3.select(`#${opt}-totops-${ii}-${jj}`)
						.style('background-color', 'lightgrey');
				}

			}).on('mouseout', function(d) {
				let id = this.id.split('-'),
				 opt = id[0], ii = +id[2], jj = +id[3];
				if (opt !== 'circular' && (ii > 4 || jj > 4)) {
					return;
				}

				if (!select_pixel[opt] || select_pixel[opt][0] != d) {
					this.style.backgroundColor = 'white';

					d3.select(`#${opt}-totops-${ii}-${jj}`)
						.style('background-color', baseColors(colorScale[opt](tot_conv_involved[opt][ii][jj])));
				}
			});
	})
	render_input_border(opt, input_table);

	// calculate padded input for demo
	calculate_demo_display(opt);

	// render demo base
	let demo_table = d3.select(`#${opt}_demo tbody`);
	demo_display[opt].forEach((row, i) => {
		if (opt !== 'circular' && i >= demo_display[opt].length-2) return;
		let row_to_render = [];
		if (opt !== 'circular') {
			row_to_render = row.slice(0, row.length-2);
		} else {
			row_to_render = row;
		}
		demo_table.append('tr')
			.selectAll('td')
			.data(row_to_render).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-demo-${i}-${j}`)
			.html(d => d.length == 2 ? '...' : d)
	})
	render_demo_border(opt, demo_table);

	// render tot cov involved
	calculate_tot_conv(opt);
	let opt_min = d3.min(d3.min(tot_conv_involved[opt])), 
		opt_max = d3.max(d3.max(tot_conv_involved[opt]));

	colorScale[opt] = d3.scaleLinear()
		.domain([0, opt_max])
		.range([0, 1])
	let tot_table = d3.select(`#${opt}_totops tbody`);

	tot_conv_involved[opt].forEach((row, i) => {
		tot_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-totops-${i}-${j}`)
			.html(d => d)
			.style('background-color', d => baseColors(colorScale[opt](d)))
	})


	// render used base
	let used_table = d3.select(`#${opt}_used tbody`);
	used_display[display_size[opt]].forEach((row, i) => {
		used_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-used-${i}-${j}`)
			.style('background-color', demo_background)
			.html(d => d)
	})

	// d3.select(`#${opt}_overview`)
	//	.style('display', 'flex');
}

function update_used_table(opt, ii, jj) {
	// calculate the used cells
	let used_display_to_render = get_tot_conv_at(opt, ii, jj, display_size[opt]);

	// rendering
	used_display_to_render.forEach((row, i) => {
		row.forEach((val, j) => {
			d3.select(`#${opt}-used-${i}-${j}`)
				.style('background-color', demo_background)
				.html(val);
		});
	});

	// sum
	d3.select(`#${opt}_used_sum`)
		.html(tot_conv_involved[opt][ii][jj])
}

function find_the_next_conv(opt) {
	let contain = false;

	last_y++;
	if (last_y + display_size[opt] + (dilation_factor-1)*(display_size[opt]-1) > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
	}	

	if (opt == 'partial_conv') {
		if (Math.abs(rendered_conv - tot_conv_involved[opt][select_x][select_y]) < 1e-7) {
			rendered_conv = 0;
		}
	}

	if (rendered_conv == tot_conv_involved[opt][select_x][select_y] || rendered_conv == 0) {
		last_y = 0, last_x = 0;
	}
	while (last_x < demo_display[opt].length && last_y < demo_display[opt][0].length) {
		for (let i = 0; i < display_size[opt]; i++) {
			for (let j = 0; j < display_size[opt]; j++) {
				let x = last_x + i + (dilation_factor-1)*i,
					y = last_y + j + (dilation_factor-1)*j;
				if (demo_display[opt][x][y] == select_val) {
					contain = true;
					break;
				}
			}
			if (contain) break;
		}
		if (contain) break;

		last_y++;
		if (last_y + display_size[opt] + (dilation_factor-1)*(display_size[opt]-1) > demo_display[opt][0].length) {
			last_y = 0;
			last_x ++;
		}
	}
}

function find_the_previous_conv(opt) {
	let contain = false;
	last_y--;

	if (last_y < 0) {
		last_y = demo_display[opt][0].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
		last_x --;
	}
	if (last_x < 0) {
		last_x = demo_display[opt].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
	}

	if (rendered_conv == 1) {
		last_y = demo_display[opt][0].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
		last_x = demo_display[opt].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
	}
	while (last_x >= 0 && last_y >= 0) {
		for (let i = 0; i < display_size[opt]; i++) {
			for (let j = 0; j < display_size[opt]; j++) {
				let x = last_x + i + (dilation_factor-1)*i,
					y = last_y + j + (dilation_factor-1)*j;
				if (demo_display[opt][x][y] == select_val) {
					contain = true;
					break;
				}
			}
			if (contain) break;
		}
		if (contain) break;

		last_y--;
		if (last_y < 0) {
			last_y = demo_display[opt][0].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
			last_x --;
		}
		if (last_x < 0) {
			last_x = demo_display[opt].length - display_size[opt] - (dilation_factor-1)*(display_size[opt]-1);
		}
	}
}

function update_demo(opt, previous) {
	// find the next involved conv
	if (previous !== undefined) {
		find_the_previous_conv(opt);
	} else {
		find_the_next_conv(opt);
	}

	if (previous===undefined && rendered_conv == tot_conv_involved[opt][select_x][select_y]) {
		rendered_conv = 0;
	}
	
	d3.selectAll(`#${opt}_demo td`)
		.style('background-color', 'white');

	if (opt == 'partial_conv') {
		update_demo_partial(opt, previous);
		return;
	}

	count = 0;
	used_x = [], used_y = [];
	for (let i = 0; i < display_size[opt]; i++) {
		for (let j = 0; j < display_size[opt]; j++) {
			let x = last_x + i + (dilation_factor-1)*i,
			y = last_y + j + (dilation_factor-1)*j;
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== select_val) {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
				used_x.push(i);
				used_y.push(j);
				count++;
			}
		}
	}

	if (previous !== undefined) {
		rendered_conv--;
		if (rendered_conv == 0) rendered_conv = tot_conv_involved[opt][select_x][select_y];
		d3.select(`#${opt}_turn`)
			.html(count > 1 ? `${rendered_conv-count} to ${rendered_conv} / ${tot_conv_involved[opt][select_x][select_y]}` : `${rendered_conv} / ${tot_conv_involved[opt][select_x][select_y]}`);
	} else {
		rendered_conv++;
		d3.select(`#${opt}_turn`)
			.html(count > 1 ? `${rendered_conv} to ${rendered_conv+count-1} / ${tot_conv_involved[opt][select_x][select_y]}` : `${rendered_conv} / ${tot_conv_involved[opt][select_x][select_y]}`);
		rendered_conv += count - 1;
	}
	
	// rendering used cells
	d3.selectAll(`#${opt}_used td`)
		.style('background-color', demo_background);
	for (let i = 0; i < used_x.length; i++) {
		d3.select(`#${opt}-used-${used_x[i]}-${used_y[i]}`)
			.style('background-color', highlight_background)
	}
}

function update_demo_partial(opt, previous) {
	let count = 0;
	let used_x = [], used_y = [];
	for (let x = last_x; x < last_x+display_size[opt]; x++) {
		for (let y = last_y; y < last_y+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== ' ') {
				if (d3.select(`#${opt}-demo-${x}-${y}`).html() == select_val) {
					used_x.push(x-last_x);
					used_y.push(y-last_y);
					d3.select(`#${opt}-demo-${x}-${y}`)
						.style('background-color', highlight_background)
				} else {
					d3.select(`#${opt}-demo-${x}-${y}`)
						.style('background-color', demo_background);
				}
				count++;
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', outside_highlight_background)
			}
			
		}
	}

	d3.select(`#${opt}_turn`)
		.html(`9/${count} = ${(9/count).toFixed(2)}`);

	// rendering used cells
	d3.selectAll(`#${opt}_used td`)
		.style('background-color', demo_background);
	for (let i = 0; i < used_x.length; i++) {
		d3.select(`#${opt}-used-${used_x[i]}-${used_y[i]}`)
			.style('background-color', highlight_background)
	}

	if (previous) {
		rendered_conv -= 9/count;
	} else {
		rendered_conv += 9/count;
	}
}



function render_demo_border(opt, demo_table) {
	if (opt == 'valid') return;

	if (opt == 'circular') {
		// upper border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-0-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-0`)
				.style('border-right', '1px solid black');
		})
		// bottom border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-7-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-7`)
				.style('border-right', '1px solid black');
		})
	} else if (pad_size[opt] == 1){
		// upper border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-0-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(1,8).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-0`)
				.style('border-right', '1px solid black');
		})
	} else {
		// upper border
		d3.range(2,11).forEach(ix => {
			demo_table.select(`#${opt}-demo-1-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(2,11).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-1`)
				.style('border-right', '1px solid black');
		})
	}
}

function render_input_border(opt, input_table) {
	if (opt == 'circular') {
		// upper border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-0-${ix}`)
				.style('border-top', '1px solid black');
		})
		// left border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-0`)
				.style('border-left', '1px solid black');
		})
		// bottom border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-6-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-6`)
				.style('border-right', '1px solid black');
		})
	} else {
		// upper border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-0-${ix}`)
				.style('border-top', '1px solid black');
		})
		// left border
		d3.range(0,7).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-0`)
				.style('border-left', '1px solid black');
		})
	}
}

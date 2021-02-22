 
 let input_display = {
 	'basic': [['a', 'b', 'c', 'd', 'e', '...', '...', ], 
 			  ['f', 'g', 'h', 'i', 'j', '...', '...'], 
 			  ['k', 'l', 'm', 'n', 'o', '...', '...'], 
 			  ['p', 'q', 'r', 's', 't', '...', '...'], 
 			  ['u', 'v', 'w', 'x', 'y', '...', '...'], 
 			  ['...', '...', '...', '...', '...', '...', '...'], 
 			  ['...', '...', '...', '...', '...', '...', '...']],
 	// 'zero': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'circular': [['a', 'b', 'c', 'd', 'e'], 
 				 ['p', '...', '...', '...', 'f'], 
 				 ['o', '...', '...', '...', 'g'], 
 				 ['n', '...', '...', '...', 'h'], 
 				 ['m', 'l', 'k', 'j', 'i']],
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
 	// 'valid': [[1, 2, 3], [2, 4, 6], [3, 6, 9]],
 	// 'zero': [[4, 6, 6], [6, 9, 9], [6, 9, 9]],
 	'circular': [[9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9], 
 				 [9, 9, 9, 9, 9]],
 	// 'symmetric': [[9, 9, 9], [9, 9, 9], [9, 9, 9]],
 	// 'reflect': [[4, 8, 6, 6], [8, 16, 12, 12], [6, 12, 9, 9], [6, 12,9,9]],
 	// 'replicate': [[36, 24, 30, 30], [24, 16, 20, 20], [30, 20, 25, 20], [30, 20, 25, 20]],
 	// 'partial_conv': [[6.25, 8.75, 7.5, 7.5 ], [8.75, 12.25, 10.5, 10.5], [7.5, 10.5, 9, 9], [7.5, 10.5, 9, 9]],
 }

 let used_display = {
 	3: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
 	5: [[0, 0, 0, 0, 0],
	 	[0, 0, 0, 0, 0],
	 	[0, 0, 0, 0, 0],
	 	[0, 0, 0, 0, 0],
	 	[0, 0, 0, 0, 0],]
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
 }

 let rendered = {}, calculated = true, used_x, used_y, x_plus;

 let select_pixel = {}, timer;
 let kernal_size = 3, rendered_conv = 0, st_x, st_y, select_x, select_y, select_val;

 let last_x, last_y;

 function render_convolution(opt) {
 	// clear
 	// d3.selectAll(`#${opt}_input tbody *`).remove();
 	// d3.selectAll(`#${opt}_totops tbody *`).remove();
 	// d3.selectAll(`#${opt}_demo tbody *`).remove();

 	// initialize
 	if (rendered[opt] == undefined & opt != 'symmetric') {
 		rendered[opt] = true;
 		initialize_static_table(opt);
 	} else if (opt === 'symmetric'){
 		rendered[opt] = true;
 		// clear
 		d3.selectAll('#symmetric_input tr').remove();
 		d3.selectAll('#symmetric_demo tr').remove();
 		d3.selectAll('#symmetric_totops tr').remove();
 		d3.selectAll('#symmetric_used tr').remove();
 		// render
 		initialize_static_table(opt);
 	}
 }


function initialize_static_table(opt,) {
	// render interaction hint
	let input_node = d3.select(`#${opt} .summary_div`)

	input_node.select('p').append('img')
		.attr('src', "/icon/pointer.png")
		.attr('class', 'pointer_img')

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
		input_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-input-${i}-${j}`)
			.html(d => d)
			.on('click', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 4 || jj > 4) {
					return;
				}

				// reset 
				if (select_pixel[opt]) {
					d3.select(`#${opt}-input-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-totops-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						// .style('background-color', 'white');
						.style('background-color', baseColors(colorScale[opt](tot_conv_involved[opt][ii][jj])))
					d3.select(`#${opt}-demo-${select_pixel[opt][1]+pad_size[opt]}-${select_pixel[opt][2]+pad_size[opt]}`)
						.style('font-weight', 'normal')
				}

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
				x_plus = false;

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
				if (ii > 4 || jj > 4) {
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
				if (ii > 4 || jj > 4) {
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
		demo_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-demo-${i}-${j}`)
			.html(d => d)
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
			.html(d => d)
	})

	d3.select(`#${opt}_overview`)
		.style('display', 'none');
}

function update_used_table(opt, ii, jj) {
	// display overview of used cells
	d3.select(`#${opt}_overview`)
		.style('display', 'flex');

	// calculate the used cells
	let used_display_to_render = get_tot_conv_at(opt, ii, jj, display_size[opt]);

	// rendering
	used_display_to_render.forEach((row, i) => {
		row.forEach((val, j) => {
			d3.select(`#${opt}-used-${i}-${j}`)
				.style('background-color', 'white')
				.html(val);
		});
	});

	// sum
	d3.select(`#${opt}_used_sum`)
		.html(tot_conv_involved[opt][ii][jj])
}

function find_the_next_conv(opt) {
	let contain = false;
	if (rendered_conv == 0) {
		last_y = 0, last_x = 0;
	}
	while (last_x < demo_display[opt].length && last_y < demo_display[opt][0].length) {
		for (let x = last_x; x < last_x+display_size[opt]; x++) {
			for (let y = last_y; y < last_y+display_size[opt]; y++) 
				if (d3.select(`#${opt}-demo-${x}-${y}`).html() == select_val) {
					contain = true;
					break;
				}
			if (contain) break;
		}
		if (contain) break;

		last_y++;
		if (last_y + display_size[opt] > demo_display[opt][0].length) {
			last_y = 0;
			last_x ++;
			x_plus = true;
		}
	}
}

function update_demo(opt) {
	// find the next involved conv
	find_the_next_conv(opt);
	
	d3.selectAll(`#${opt}_demo td`)
		.style('background-color', 'white');

	if (opt == 'partial_conv') {
		update_demo_partial(opt);
		return;
	}

	count = 0;
	used_x = [], used_y = [];
	for (let x = last_x; x < last_x+display_size[opt]; x++) {
		for (let y = last_y; y < last_y+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== select_val) {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
				used_x.push(x-last_x);
				used_y.push(y-last_y);
				count++;
			}
		}
	}

	rendered_conv++;
	d3.select(`#${opt}_turn`)
		.html(count > 1 ? `${rendered_conv} to ${rendered_conv+count-1}` : rendered_conv);
	rendered_conv += count - 1;

	// rendering used cells
	d3.selectAll(`#${opt}_used td`)
		.style('background-color', 'white');
	for (let i = 0; i < used_x.length; i++) {
		d3.select(`#${opt}-used-${used_x[i]}-${used_y[i]}`)
			.style('background-color', highlight_background)
	}
	

	x_plus = false;
	last_y++;
	if (last_y + display_size[opt] > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
		x_plus = true;
	}	

	if (rendered_conv == tot_conv_involved[opt][select_x][select_y]) {
		if (!calculated) {
			d3.select(`#${opt}_used_sum`)
				.html(rendered_conv);
		}
		calculated = true;
		rendered_conv = 0;
		x_plus = false;
	}
}

function update_demo_partial(opt) {
	count = 0;
	for (let x = last_x; x < last_x+display_size[opt]; x++) {
		for (let y = last_y; y < last_y+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== '') {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
				count++;
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			}
		}
	}

	d3.select(`#${opt}_turn`)
		.html(`9/${count} = ${(9/count).toFixed(2)}`);
	rendered_conv += 9/count;

	if (Math.abs(rendered_conv - tot_conv_involved[opt][select_x][select_y]) < 1e-7) {
		rendered_conv = 0;
		calculated = true;
	}
	last_y++;
	if (last_y + display_size[opt] > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
	}
}



function render_demo_border(opt, demo_table) {
	if (opt == 'valid') return;

	if (opt == 'circular') {
		// upper border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-0-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-0`)
				.style('border-right', '1px solid black');
		})
		// bottom border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-5-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-5`)
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
		d3.range(2,9).forEach(ix => {
			demo_table.select(`#${opt}-demo-1-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(2,9).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-1`)
				.style('border-right', '1px solid black');
		})
	}
}

function render_input_border(opt, input_table) {
	if (opt == 'circular') {
		// upper border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-0-${ix}`)
				.style('border-top', '1px solid black');
		})
		// left border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-0`)
				.style('border-left', '1px solid black');
		})
		// bottom border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-4-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-4`)
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

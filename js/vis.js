 
 let input_display = {
 	'valid': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'zero': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],

 },

demo_display = {
 	'valid': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'zero': [['0', '0', '0', '0','...', '...',], ['0', 'a', 'b', 'c', '...', '...', ], ['0', 'd', 'e', 'f', '...', '...'], ['0', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 };

 let tot_conv_involved = {
 	'valid': [[1, 2, 3], [2, 4, 6], [3, 6, 9]],
 	'zero': [[4, 6, 6], [6, 9, 9], [6, 9, 9]],
 }

 let display_size = {
 	'valid': 3,
 	'zero': 3,
 }, pad_size = {
 	'valid': 0,
 	'zero': 1,
 }

 let rendered = {}

 let select_pixel = {}, timer;
 let kernal_size = 3, rendered_conv = 0, st_x, st_y, select_x, select_y;

 function render_convolution(opt) {
 	// clear
 	// d3.selectAll(`#${opt}_input tbody *`).remove();
 	// d3.selectAll(`#${opt}_totops tbody *`).remove();
 	// d3.selectAll(`#${opt}_demo tbody *`).remove();

 	// initialize
 	if (rendered[opt] == undefined) {
 		initialize_static_table(opt);
 		rendered[opt] = true;
 	}
 }


function initialize_static_table(opt,) {
	// render input table 
	let input_table = d3.select(`#${opt}_input tbody`);

	input_display[opt].forEach((row, i) => {
		input_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-input-${i}-${j}`)
			.html(d => d)
			.on('click', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 2 || jj > 2) {
					return;
				}

				if (select_pixel[opt]) {
					d3.select(`#${opt}-input-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-totops-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-demo-${select_pixel[opt][1]+pad_size[opt]}-${select_pixel[opt][2]+pad_size[opt]}`)
						.style('font-weight', 'normal')
				}

				this.style.backgroundColor = 'grey'
				d3.select(`#${opt}-totops-${ii}-${jj}`)
					.style('background-color', 'grey');
				select_pixel[opt] = [d, ii, jj];

				d3.select(`#${opt}_select`).html(d);

				d3.select(`#${opt}-demo-${ii+pad_size[opt]}-${jj+pad_size[opt]}`)
					.style('font-weight', 'bold')

				rendered_conv = 0;
				select_x = ii, select_y = jj;
				st_x = Math.max(0, ii+pad_size[opt]-kernal_size+1);
				st_y = Math.max(0, jj+pad_size[opt]-kernal_size+1);

				window.clearInterval(timer);
				timer = window.setInterval(() => update_demo(opt), 500); 
			})
			.on('mouseover', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 2 || jj > 2) {
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
				if (ii > 2 || jj > 2) {
					return;
				}

				if (!select_pixel[opt] || select_pixel[opt][0] != d) {
					this.style.backgroundColor = 'white';

					d3.select(`#${opt}-totops-${ii}-${jj}`)
						.style('background-color', 'white');
				}
			});
	})

	// render tot cov involved
	let tot_table = d3.select(`#${opt}_totops tbody`);

	tot_conv_involved[opt].forEach((row, i) => {
		tot_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-totops-${i}-${j}`)
			.html(d => d)
	})

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
}

function update_demo(opt) {
	let max_y = Math.min(select_y, demo_display[opt].length - kernal_size)+pad_size[opt],
		step = max_y - st_y + 1;

	let ii = st_x + Math.floor(rendered_conv / step), jj = st_y + (rendered_conv % step);

	d3.selectAll(`#${opt}_demo td`)
		.style('background-color', 'white');

	for (let x = ii; x < ii+display_size[opt]; x++) {
		for (let y = jj; y < jj+display_size[opt]; y++) {
			d3.select(`#${opt}-demo-${x}-${y}`)
				.style('background-color', '#fbb4ae');
		}
	}

	rendered_conv++;
	d3.select(`#${opt}_turn`)
		.html(rendered_conv);

	if (rendered_conv == tot_conv_involved[opt][select_x][select_y]) {
		rendered_conv = 0;
	}
}


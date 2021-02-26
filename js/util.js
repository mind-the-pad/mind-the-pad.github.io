
function calculate_demo_display(opt) {
	if (demo_display[opt] !== undefined && opt !== 'symmetric') {
		return;
	}

	// calculate
	switch (opt) {
		case 'valid':
			demo_display[opt] = input_display['basic'].slice();
			return;
		case 'zero':
			demo_display[opt] = add_zero_padding();
			return;
		case 'circular':
			demo_display[opt] = add_circular_padding();
			return;
		case 'symmetric':
			demo_display[opt] = add_symmetric_padding(kernal_size, pad_size['symmetric']);
			return;
		case 'reflect':
			demo_display[opt] = add_reflect_padding();
			return;
		case 'replicate':
			demo_display[opt] = add_replicate_padding();
			return;
		case 'partial_conv':
			demo_display[opt] = add_partial_conv_padding();
			return;
	}
}

function add_circular_padding() {
	let arr = [];

	for (let i = 0; i < input_display['circular'].length; i++)
    	arr[i] = input_display['circular'][i].slice();

	// put the last row to top
	arr.unshift(arr[arr.length-1].slice())

	// put the original first row to bottom
	arr.push(arr[1].slice())

	// make the left padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].unshift(arr[i][arr[i].length-1]);
	}

	// make the right padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].push(arr[i][1]);
	}

	return arr;
}

function add_zero_padding() {
	let arr = [];

	for (let i = 0; i < input_display['basic'].length; i++)
    	arr[i] = input_display['basic'][i].slice();

	// make the top padding
	arr.unshift(['0', '0', '0', '0', '0', '0', '0', '0', '0']);

	// make the left padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].unshift('0');
	}

	return arr;
}

function add_symmetric_padding(kernal_size, padding_size) {
	let arr = [];

	for (let i = 0; i < input_display['basic'].length; i++)
    	arr[i] = input_display['basic'][i].slice();

    if (padding_size == 1) {
    	// add the top padding
    	arr.unshift(arr[0].slice())

    	// add the left padding
    	for (let i = 0; i < arr.length; i++) {
			arr[i].unshift(arr[i][0]);
		}
    } else {
    	// add the top padding
    	arr.unshift(arr[0].slice());
    	arr.unshift(arr[2].slice());

		// add the bottom content
		arr.push(['...', '...', '...', '...', '...', '...', '...', '...', '...',]);
		arr.push(['...', '...', '...', '...', '...', '...', '...', '...', '...',]);

    	// add the left padding
    	for (let i = 0; i < arr.length; i++) {
			arr[i].unshift(arr[i][0]);
			arr[i].unshift(arr[i][2]);
		}

		// add the right content 
		for (let i = 0; i < arr.length; i++) {
			arr[i].push('...');
			arr[i].push('...');
		}
    }
    return arr;
}

function add_reflect_padding() {
	let arr = [];

	for (let i = 0; i < input_display['basic'].length; i++)
    	arr[i] = input_display['basic'][i].slice();

    // add the top padding
	arr.unshift(arr[1].slice())

	// add the left padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].unshift(arr[i][1]);
	}
	return arr;
}

function add_replicate_padding() {
	let arr = [];

	for (let i = 0; i < input_display['basic'].length; i++)
    	arr[i] = input_display['basic'][i].slice();

    // add the top padding
    arr.unshift(arr[0].slice());
	arr.unshift(arr[1].slice());

	// add the bottom content
	arr.push(['...', '...', '...', '...', '...', '...', '...','...', '...',]);
	arr.push(['...', '...', '...', '...', '...', '...', '...','...', '...',]);

	// add the left padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].unshift(arr[i][0]);
		arr[i].unshift(arr[i][1]);
	}

	// add the right content 
	for (let i = 0; i < arr.length; i++) {
		arr[i].push('...');
		arr[i].push('...');
	}

	return arr;
}

function add_partial_conv_padding() {
	let arr = [];

	for (let i = 0; i < input_display['basic'].length; i++)
    	arr[i] = input_display['basic'][i].slice();

    // add the top padding
	arr.unshift([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

	// add the left padding
	for (let i = 0; i < arr.length; i++) {
		arr[i].unshift(" ");
	}

	return arr;
}

function calculate_tot_conv(opt) {
	if (tot_conv_involved[opt] !== undefined && opt!=='symmetric') {
		return;
	}

	// calculate
	let sum_arr = [];
	for (let i = 0;  i < 7; i++) {
		let temp = [];
		for (let j = 0; j < 7; j++) {
			let x =0, y = 0, val=0, sum=0;
			let pixel = input_display[opt];

			// if (pixel == '...'){
			// 	pixel = 'xxx';
			// 	demo_display[opt][i+pad_size[opt]+dilation_factor-1][j+pad_size[opt]+dilation_factor-1] = 'xxx'
			// }
			if (opt == 'circular') {
				pixel = input_display[opt][i][j]
			} else {
				pixel = input_display['basic'][i][j];
			}

			[x, y, val] = find_the_next_conv_for_count(opt, 0, 0, pixel);
			while (val >= 0) {
				sum += val;
				[x, y, val] = find_the_next_conv_for_count(opt, x, y, pixel);
			}
			temp.push(sum);
			// if (pixel == 'xxx'){
			// 	demo_display[opt][i+pad_size[opt]+dilation_factor-1][j+pad_size[opt]+dilation_factor-1] = '...';
			// }
		}
		sum_arr.push(temp);
	}
	tot_conv_involved[opt] = sum_arr.slice();
}

function get_tot_conv_at(opt, ii, jj, size) {
	let x =0, y = 0, val=0, sum_arr=[];

	for (let i = 0; i < used_display[size].length; i++)
    	sum_arr[i] = used_display[size][i].slice();
	
	let pixel = d3.select(`#${opt}-input-${ii}-${jj}`).html();

	[x, y, val] = find_the_next_conv_for_count(opt, 0, 0, pixel, sum_arr);
	while (val >= 0) {
		[x, y, val] = find_the_next_conv_for_count(opt, x, y, pixel, sum_arr);
	}
	return sum_arr;
}


function find_the_next_conv_for_count(opt, last_x, last_y, select_val, sum_arr) {
	let contain = false, val = 0, count = 0, pos_x, pos_y;

	while (last_x + display_size[opt] + (dilation_factor-1)*(display_size[opt]-1) <= demo_display[opt].length) {
		for (let i= 0; i < display_size[opt]; i++) {
			for (let j = 0; j < display_size[opt]; j++) {
				let x = last_x + i + (dilation_factor-1)*i,
					y = last_y + j + (dilation_factor-1)*j;
				if (opt === 'partial_conv' && demo_display[opt][x][y] !== ' ') {
					count++;
				}
				if (demo_display[opt][x][y] == select_val) {
					contain = true;
					pos_x = i, pos_y = j;
					if (opt !== 'partial_conv') {
						val++;
						if (sum_arr !== undefined) {
							// sum_arr[x-last_x][y-last_y]++;
							sum_arr[i][j]++;
						}
					}
				}
			}
		}

		last_y++;
		if (last_y + display_size[opt] + (dilation_factor-1)*(display_size[opt]-1) > demo_display[opt][0].length) {
			last_y = 0;
			last_x ++;
		}

		if (opt === 'partial_conv') {
			if (count > 0 && contain) {
				val += 9/count;
				contain = false;
				if (sum_arr !== undefined) {
					sum_arr[pos_x][pos_y] = `9/${count}`; 
				}
			}
			count = 0;
		}
		
	}

	last_y++;
	if (last_y + display_size[opt] + (dilation_factor-1)*(display_size[opt]-1) > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
	}	

	if (last_x >= demo_display[opt].length) {
		return [last_x, last_x, -1];
	} else {
		return [last_x, last_y, val];
	}
}


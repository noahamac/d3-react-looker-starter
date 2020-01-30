import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Viz = (props) => {
	useEffect(() => {
		d3.select('.viz > *').remove();
		draw(props)
	}, [props])
	return <div className='viz' />
}

const draw = (props) => {
  // Calculate some initial values here

	d3.select('.viz > *').remove();
	const svg = d3.select('.viz').append('svg');

	// Continue d3 code here...

}

export default Viz
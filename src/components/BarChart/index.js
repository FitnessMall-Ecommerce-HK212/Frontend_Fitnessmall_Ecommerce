import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarChart extends Component {
	render() {
        const containerProps={width:"90%",padding:"20px",height:"400px"}
		const options = {
			title: {
				text: "The chart for Google Fit"
			},
            animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Ngay 1",  y: 10  },
					{ label: "Ngay 2", y: 15  },
					{ label: "Ngay 3", y: 25  },
					{ label: "Ngay 4",  y: 30  },
					{ label: "Ngay 5",  y: 28  },
                    { label: "Ngay 6",  y: 30  },
					{ label: "Ngay 7",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options} containerProps={containerProps}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default BarChart;
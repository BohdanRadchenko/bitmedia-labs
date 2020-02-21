import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class BarChartV2 extends React.Component {

  scaleColor = d3.scaleSequential(d3.interpolateViridis);
  scaleHeight = d3.scaleLinear();
  scaleWidth = d3.scaleBand().padding(0.1);

  updateScales() {
    const { data, width, height } = this.props;
    this.scaleColor.domain([0, data.length]);
    this.scaleWidth
      .domain(data.map((d) => (d.item)))
      .range([0, width]);
    this.scaleHeight
      .domain(d3.extent(data, (d) => (d.count)))
      .range([height - 20, 0]);
  }

  render() {
    this.updateScales();
    const { width, height, data } = this.props;
    console.log('width', width)
    console.log('height', height)
    console.log('data', data)
    const bars = data.map((d) => (
      <rect key={d.item}
            width={this.scaleWidth.bandwidth()}
            // height={height - this.scaleHeight(d.count)}
            height={height}
            x={ this.scaleWidth(d.item)}
            y={this.scaleHeight(d.count)}
            fill={this.scaleColor(d.item)}
            rx="5" ry="5"
      />));
    return (
      <svg width={width} height={height} >
        { bars }
      </svg>
    );
  }
}

BarChartV2.defaultProps = {
  animDuration: 600
};

BarChartV2.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  animDuration: PropTypes.number
};

export default BarChartV2;


// import React, {Component} from "react";
// import PropTypes from "prop-types";
// import * as d3 from "d3";
//
// class BarChartV1 extends React.Component {
//   scaleColor = d3.scaleSequential(d3.interpolateViridis);
//   scaleHeight = d3.scaleLinear();
//   scaleWidth = d3.scaleBand().padding(0.1);
//
//   componentDidMount() {
//     this.updateChart();
//   }
//
//   componentDidUpdate() {
//     this.updateChart();
//   }
//
//   updateChart() {
//     this.updateScales();
//     const { data, width, height, animDuration } = this.props;
//     const bars = d3.select(this.viz)
//       .selectAll(".bar")
//       .data(data, function key(d) { return d.item });
//
//     bars.exit()
//       .transition().duration(animDuration)
//       .attr("y", height)
//       .attr("height", 0)
//       .style("fill-opacity", 0)
//       .remove();
//
//     bars.enter()
//       .append("rect")
//       .attr("class", "bar")
//       .attr("y", height)
//       .attr("rx", 5 ).attr("ry", 5 )
//       .merge(bars)
//       .transition().duration(animDuration)
//       .attr("y", (d) => ( this.scaleHeight(d.count) ))
//       .attr("height", (d) => (height - this.scaleHeight(d.count)) )
//       .attr("x", (d) => ( this.scaleWidth(d.item) ) )
//       .attr("width", this.scaleWidth.bandwidth() )
//       .style("fill",  (d) => ( this.scaleColor(d.item) ));
//   }
//
//   updateScales() {
//     const { data, width, height } = this.props;
//     this.scaleColor.domain([0, data.length]);
//     this.scaleWidth
//       .domain(data.map((d) => (d.item)))
//       .range([0, width]);
//     this.scaleHeight
//       .domain(d3.extent(data, (d) => (d.count)))
//       .range([height - 20, 0]);
//   }
//
//   render() {
//     const { width, height } = this.props;
//     return (
//       <svg ref={ viz => (this.viz = viz) }
//            width={width} height={height} >
//       </svg>
//     );
//   }
// }
//
// BarChartV1.defaultProps = {
//   animDuration: 600
// };
//
// BarChartV1.propTypes = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
//   animDuration: PropTypes.number
// };
//
// export default BarChartV1;


// import React from "react";
//
// import css from './TestChart.module.css'
//
// const TestChart = () => {
//   return (
//     <div className={css.container}>
//       <svg width='500' height='500'>
//         <rect x='0' y='450' fill='#8ab200'  height='50' width='100'> </rect>
//         <rect x='100' y='350' fill='#8ab200'  height='150' width='100'> </rect>
//         <rect x='200' y='0' fill='#8ab200'  height='500' width='100'> </rect>
//         <rect x='300' y='300' fill='#8ab200'  height='200' width='100'> </rect>
//       </svg>
//     </div>
//   )
// }
//
// export default TestChart
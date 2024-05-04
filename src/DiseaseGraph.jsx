import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './DiseaseGraph.css';

const DiseaseGraph = ({ disease, selectedNestedData }) => {
  useEffect(() => {
    if (disease) {
      const data = disease.data;
      const svgWidth = 800;
      const svgHeight = 500;

      d3.select('.d3-chart').selectAll('*').remove(); // Clear existing content

      const svg = d3
        .select('.d3-chart')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

      const margin = { top: 30, right: 30, bottom: 70, left: 60 };
      const chartWidth = svgWidth - margin.left - margin.right;
      const chartHeight = svgHeight - margin.top - margin.bottom;

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.label))
        .range([0, chartWidth])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([chartHeight, 0]);

      const chartGroup = svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      chartGroup
        .append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(xScale))
        .selectAll('text') // Rotate X-axis labels for readability
        .attr('transform', 'rotate(-45)')
        .attr('text-anchor', 'end');

      chartGroup.append('g').call(d3.axisLeft(yScale));

      chartGroup
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.label))
        .attr('y', (d) => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => chartHeight - yScale(d.value))
        .attr('fill', (d) =>
          d.label === selectedNestedData ? '#e76f51' : '#69b3a2'
        ) // Highlight selected
        .attr('stroke', 'black') // Border for definition
        .attr('stroke-width', '1px');

    }
  }, [disease, selectedNestedData]); // React to changes in disease and selected data

  return (
    <div className="disease-graph"> {/* Apply Flexbox to center */}
      {disease ? (
        <div>
          <h3>{disease.name} Data</h3>
          <div className="d3-chart"></div> {/* The chart div */}
        </div>
      ) : (
        <p>No disease selected</p>
      )}
    </div>
  );
};

export default DiseaseGraph;

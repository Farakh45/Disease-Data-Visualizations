import React, { useEffect } from 'react';
import * as d3 from 'd3';

const DiseaseGraph = ({ disease }) => {
  useEffect(() => {
    const chart = d3.select('.d3-chart');
    chart.selectAll('*').remove(); // Clear existing content

    if (disease) {
      // Determine values based on disease properties
      const severityValue = {
        Mild: 3,
        Moderate: 6,
        Severe: 9,
      }[disease.severity?.coding?.[0]?.display] || 0;

      const clinicalStatusValue = {
        active: 8,
        remission: 5,
        resolved: 2,
      }[disease.clinicalStatus?.coding?.[0]?.code] || 0;

      const data = [
        { label: 'Male', value: severityValue },
        { label: 'Female', value: clinicalStatusValue },
      ];

      const svgWidth = 800;
      const svgHeight = 500;

      const svg = chart
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

      const margin = { top: 30, right: 30, bottom: 70, left: 60 };
      const chartWidth = svgWidth - margin.left - margin.right;
      const chartHeight = svgHeight - margin.top - margin.bottom;

      const xScale = d3.scaleBand().domain(data.map((d) => d.label)).range([0, chartWidth]).padding(0.1);

      const yScale = d3.scaleLinear().domain([0, 10]).range([chartHeight, 0]);

      const chartGroup = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

      chartGroup.append('g').attr('transform', `translate(0, ${chartHeight})`).call(d3.axisBottom(xScale));

      chartGroup.append('g').call(d3.axisLeft(yScale));

      const bars = chartGroup
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.label))
        .attr('y', chartHeight)
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => chartHeight - yScale(d.value))
        .attr('y', (d) => yScale(d.value))
        .attr('fill', '#69b3a2'); // Default color

      // Correct event binding for hover effects
      bars
        .on('mouseover', function () {
          d3.select(this).transition().duration(200).attr('fill', '#66afe9'); // Change color on hover
        })
        .on('mouseout', function () {
          d3.select(this).transition().duration(200).attr('fill', '#69b3a2'); // Revert to original color
        });
    }
  }, [disease]);

  return (
    <div>
      <div className="d3-chart" />
    </div>
  );
};

export default DiseaseGraph;

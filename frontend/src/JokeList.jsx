import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import './jokeList.css';

const DynamicGraph = () => {
  const [jokes, setJokes] = useState([]);
  const [diseaseNames, setDiseaseNames] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('');
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({ display: false, top: 0, left: 0, content: '' });

  // Function to generate random values
  const generateRandomValue = () => Math.floor(Math.random() * 9000) + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jokes');
        setJokes(response.data);

        const diseases = response.data.flatMap((joke) =>
          joke.entry.map((entry) => {
            const code = entry?.resource?.code;
            return code?.coding?.[0]?.display || code?.text || 'Unknown';
          })
        );

        const uniqueDiseases = [...new Set(diseases)];
        const diseasesWithValues = uniqueDiseases.map((disease) => ({
          name: disease,
          value: generateRandomValue(),
        }));

        setDiseaseNames(diseasesWithValues);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDisease && jokes.length > 0) {
      const svg = d3.select(svgRef.current);

      svg.selectAll('*').remove(); // Clear existing content

      // Find the random value for the selected disease
      const diseaseEntry = diseaseNames.find(
        (disease) => disease.name === selectedDisease
      );

      const data = [
        {
          category: selectedDisease,
          count: diseaseEntry?.value || 0,
        },
      ];

      const width = 800;
      const height = 600;
      const margin = { top: 40, right: 40, bottom: 70, left: 70 };

      const x = d3.scaleBand()
        .domain(data.map((d) => d.category))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.count + 10)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      // Add graph title
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top - 10)
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')
        

      // Draw x-axis with label
      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

      svg.append('text')
        .attr('x', width / 2)
        .attr('y', height - margin.bottom / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        

      // Draw y-axis with label
      svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y));

      svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -(height / 2))
        .attr('y', margin.left / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
       

      // Draw the bars with tooltip interaction
      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.category))
        .attr('y', (d) => y(d.count))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - margin.bottom - y(d.count))
        .attr('fill', 'steelblue')
        .on('mouseover', (event, d) => {
          setTooltip({
            display: true,
            top: event.pageY - 10,
            left: event.pageX + 10,
            content: `Random Value: ${d.count}`,
          });
        })
        .on('mouseout', () => setTooltip({ display: false, content: '' }));
    }
  }, [selectedDisease, diseaseNames]);

  return (
    <div>
      <h2>Select a Disease</h2>
      <select onChange={(e) => setSelectedDisease(e.target.value)} value={selectedDisease}>
        <option value="">Select a disease</option>
        {diseaseNames.map((disease, index) => (
          <option key={index} value={disease.name}>
            {disease.name}
          </option>
        ))}
      </select>

      {selectedDisease && (
        <div>
          <h3>Occurancy of {selectedDisease}</h3>
          <svg ref={svgRef} width="800" height="600"></svg>
          {tooltip.display && (
            <div
              className="tooltip"
              style={{
                position: 'absolute',
                top: tooltip.top,
                left: tooltip.left,
                padding: '5px',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '3px',
              }}
            >
              {tooltip.content}
            </div>
          )}
          {/* Chart Description */}
          <div style={{ marginTop: '20px', fontSize: '14px' }}>
          <div className="chart-description">
      <h3>Chart Description</h3>
      <p>This chart visualizes the disease data over the years.</p>
      <ul>
        <li>
          <strong>X-axis:</strong> Represents the year 2024
        </li>
        <li>
          <strong>Y-axis:</strong> Represents Number of new cases for each disease over time
        </li>
      </ul>
    </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicGraph;

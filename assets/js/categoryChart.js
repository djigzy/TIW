document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.container .project-item');
    const categoryCounts = {};
  
    projectItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      if (category) {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      }
    });
  
    const categoryData = Object.keys(categoryCounts).map((category) => ({
      category,
      count: categoryCounts[category],
    }));
  
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
  
    const svg = d3
      .select("#category-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    const x = d3
      .scaleBand()
      .domain(categoryData.map((d) => d.category))
      .range([0, width])
      .padding(0.2);
  
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(categoryData, (d) => d.count)])
      .nice()
      .range([height, 0]);
  
    svg
      .selectAll(".bar")
      .data(categoryData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.category))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.count))
      .attr("fill", "hsl(45, 100%, 72%)"); 
  
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(0,0)") 
      .style("text-anchor", "middle") 
      .style("fill", "white"); 
  
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("fill", "white");
    svg.selectAll(".domain, .tick line").attr("stroke", "white"); 
  
    svg
      .selectAll(".label")
      .data(categoryData)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.category) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.count) - 5)
      .attr("text-anchor", "middle")
      .style("fill", "white") 
      .text((d) => d.count);
  });
  
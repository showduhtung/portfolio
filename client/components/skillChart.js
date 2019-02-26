import * as d3 from 'd3';
// main svg

const root = tree(data);

let x0 = Infinity;
let x1 = -x0;
root.each(d => {
  if (d.x > x1) x1 = d.x;
  if (d.x < x0) x0 = d.x;
});

const svg = d3
  .select(DOM.svg(width, x1 - x0 + root.dx * 2))
  .style('width', '100%')
  .style('height', 'auto');

const g = svg
  .append('g')
  .attr('font-family', 'sans-serif')
  .attr('font-size', 10)
  .attr('transform', `translate(${root.dy / 3},${root.dx - x0})`);

const link = g
  .append('g')
  .attr('fill', 'none')
  .attr('stroke', '#555')
  .attr('stroke-opacity', 0.4)
  .attr('stroke-width', 1.5)
  .selectAll('path')
  .data(root.links())
  .join('path')
  .attr(
    'd',
    d => `
        M${d.target.y},${d.target.x}
        C${d.source.y + root.dy / 2},${d.target.x}
         ${d.source.y + root.dy / 2},${d.source.x}
         ${d.source.y},${d.source.x}
      `
  );

const node = g
  .append('g')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-width', 3)
  .selectAll('g')
  .data(root.descendants().reverse())
  .join('g')
  .attr('transform', d => `translate(${d.y},${d.x})`);

node
  .append('circle')
  .attr('fill', d => (d.children ? '#555' : '#999'))
  .attr('r', 2.5);

node
  .append('text')
  .attr('dy', '0.31em')
  .attr('x', d => (d.children ? -6 : 6))
  .text(d => d.data.name)
  .filter(d => d.children)
  .attr('text-anchor', 'end')
  .clone(true)
  .lower()
  .attr('stroke', 'white');

return svg.node();

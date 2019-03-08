import * as d3 from 'd3';

let svg = d3
    .select('#skill-chart')
    .style('width', '100%')
    .style('height', 'auto'),
  width = +svg.attr('width'),
  height = +svg.attr('height'),
  g = svg.append('g').attr('transform', 'translate(200,0)');

let tree = d3.cluster().size([height, width - 160]);

let stratify = d3.stratify().parentId(function(d) {
  return d.id.substring(0, d.id.lastIndexOf('.'));
});

d3.csv('skillsdata.csv', function(error, data) {
  if (error) throw error;
  let root = stratify(data).sort(function(a, b) {
    return a.height - b.height || a.id.localeCompare(b.id);
  });
  tree(root);
  let link = g
    .selectAll('.link')
    .data(root.descendants().slice(1))
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', function(d) {
      return (
        'M' +
        d.y +
        ',' +
        d.x +
        'C' +
        (d.parent.y + 100) +
        ',' +
        d.x +
        ' ' +
        (d.parent.y + 100) +
        ',' +
        d.parent.x +
        ' ' +
        d.parent.y +
        ',' +
        d.parent.x
      );
    });
  let node = g
    .selectAll('.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', function(d) {
      return 'node' + (d.children ? ' node--internal' : ' node--leaf');
    })
    .attr('transform', function(d) {
      return 'translate(' + d.y + ',' + d.x + ')';
    });
  node.append('circle').attr('r', 4);
  node
    .append('text')
    .attr('dy', 3)
    .attr('x', function(d) {
      return d.children ? -8 : 8;
    })
    .style('text-anchor', function(d) {
      return d.children ? 'end' : 'start';
    })
    .text(function(d) {
      return d.id.substring(d.id.lastIndexOf('.') + 1);
    });
});

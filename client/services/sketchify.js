export default function sketchify(path, adj){
  //transforms portions of the path in lighter strokeColor to create "sketch" effect
  var copy = path.clone()
  // copy.fullySelected= true;
  var section = Math.random() * copy.segments.length
  for(var i = 0; i < copy.segments.length; i++) {
    if(i < section){
      copy.segments[i].point.x += ( Math.random() - 1) * adj
      copy.segments[i].point.x += (Math.random() -1) * adj
    }
  }
  copy.strokeColor = '#808080'
  copy.smooth();
}

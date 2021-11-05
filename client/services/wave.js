export default function wave(path){
  //transforms points on path so each point is varied by random amounts
  //smooths the path
  for(var i = 0; i < path.segments.length; i++) {
    path.segments[i].point.x += (Math.random() - 1) * 3
    path.segments[i] .point.x += (Math.random() - 1) * 3
  }
  path.strokeColor = "black";
  path.smooth();
}

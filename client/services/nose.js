import * as Paper from 'paper'

export default function drawNose(mid, noseX, noseY){
  var nose = new Paper.Path()
  nose.strokeColor = 'black';
  nose.add(new Paper.Point(mid - noseX, noseY - 2))
  nose.add(new Paper.Point(mid, noseY))
  nose.add(new Paper.Point(mid + noseX, noseY - 2))
  nose.smooth()
}

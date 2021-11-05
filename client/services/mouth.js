import * as Paper from 'paper'
import sketchify from './sketchify';

export default function drawMouth(mid, mouthWidth, mouthY){
  var mouth = new Paper.Path()
  mouth.strokeColor = 'black';
  mouth.add(new Paper.Point(mid - mouthWidth, mouthY))
  mouth.add(new Paper.Point(mid, mouthY))
  mouth.add(new Paper.Point(mid + mouthWidth, mouthY - 4))
  sketchify(mouth, mouthWidth / 2)
  mouth.smooth();
}

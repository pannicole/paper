import * as Paper from 'paper'
import sketchify from './sketchify'
import wave from './wave'

export default function drawFace(vector, center){
  // The amount of segment points we want to create:
  var amount = 30;
  var variation = .07;
  var overlap = .5

  // Create face path
  var face = new Paper.Path();
  face.strokeColor = 'black';

  for(var i = 0; i < amount * 1.25; i++){
    face.add([center.x + vector.x, center.y + vector.y])
    vector.angle += 360/amount
  }

  sketchify(face, 3)
  wave(face)
}

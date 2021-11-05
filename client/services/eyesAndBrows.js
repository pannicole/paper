import * as Paper from 'paper'
export default function drawEyesAndBrows(mid, eyesY, width, eyeRadius){
  //--------EYES AND BROWS------------
  var eyesX = Math.floor((Math.random() * (width * .6) + 1) + width * .2)

  var leftEye = new Paper.Shape.Circle(new Paper.Point(mid - eyesX, eyesY), eyeRadius);
  leftEye.strokeColor = 'black';

  var rightEye = new Paper.Shape.Circle(new Paper.Point(mid + eyesX, eyesY), eyeRadius);
  rightEye.strokeColor = 'black';

  var browLength = (Math.random() * eyeRadius * 4) + eyeRadius
  var browHeight = (Math.random() * 20) + 5

  var leftBrow = new Paper.Path()
  leftBrow.strokeColor = 'black';
  leftBrow.add(new Paper.Point(mid-eyesX - browLength, eyesY - browHeight + 3))
  leftBrow.add(new Paper.Point(mid-eyesX, eyesY - browHeight))
  leftBrow.add(new Paper.Point(mid-eyesX + browLength, eyesY - browHeight))

  var rightBrow = new Paper.Path()
  rightBrow.strokeColor = 'black';
  rightBrow.add(new Paper.Point(mid + eyesX - browLength, eyesY - browHeight))
  rightBrow.add(new Paper.Point(mid + eyesX, eyesY - browHeight))
  rightBrow.add(new Paper.Point(mid + eyesX + browLength, eyesY - browHeight + 3))

}

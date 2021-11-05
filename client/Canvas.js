import React, {useEffect, useState} from 'react'
import * as Paper from 'paper'
import drawEyesAndBrows from './services/eyesAndBrows'
import drawFace from './services/faceOutline'
import drawMouth from './services/mouth'
import drawNose from './services/nose'

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawFaceOnCanvas = () => {
  var canvas = document.getElementById('myCanvas');
  canvas.width = canvas.height = 400

  //define constants
  var mid = canvas.width / 2
  var width = canvas.width / 4

  var vector = new Paper.Point(0,width)
  var center = new Paper.Point(mid, mid)

  var topY = mid - vector.length
  var bottomY = mid + vector.length
  var midY = (bottomY - topY)/2

  //position of the eyes, nose, and mouth
  var eyesY = topY + midY * (.5 + Math.random())
  var noseY = Math.floor(Math.random() * (bottomY -10 - eyesY + 1) + eyesY)
  var noseX = (Math.random() * 10) + 2
  var mouthY = bottomY - Math.floor(Math.random() * (bottomY - noseY))
  var mouthWidth = (Math.random() * 15) + 5
  var eyeRadius = Math.random() * 5

  Paper.setup(canvas);
  drawFace(vector, center)
  drawEyesAndBrows(mid, eyesY, width, eyeRadius)
  drawNose(mid, noseX, noseY)
  drawMouth(mid, mouthWidth, mouthY)

  Paper.view.draw();
}

export const Canvas = props => {
  const styles = useStyles();
  useEffect( () => { drawFaceOnCanvas() })

  const saveImage = () => {
    var canvas = document.getElementById("myCanvas");
    var image = canvas.toDataURL();
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
  }

  const refresh = () => {
    drawFaceOnCanvas()
  }

  return (
    <>
    <canvas id= "myCanvas" width="400" height= "400" style = {{background: "white"}}></canvas>
    <Box className = {styles.buttonBox}>
      <Button onClick= {() => refresh()}> Refresh </Button>
      <Button onClick= {() => saveImage()}> Save </Button>
    </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    width: "400px",
    display: "flex",
    justifyContent: "center",
  },
}));

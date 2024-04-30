let colorList = {
    "colors": [
      {                   
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 255, 255, 1],
          "hex": "#000"
        }
      },
      {                   
        "color": "white",
        "category": "value",
        "code": {
          "rgba": [0, 0, 0, 1],
          "hex": "#FFF"
        }
      },
      {                   
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 0, 0, 1],
          "hex": "#FF0"
        }
      },
      {                   
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [0, 0, 255, 1],
          "hex": "#00F"
        }
      },
      {                   
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 255, 0, 1],
          "hex": "#FF0"
        }
      },
      {                   
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
          "rgba": [0, 255, 0, 1],
          "hex": "#0F0"
        }
      },
    ]
  }
  
//   console.log(colorList.colors[2]);
//   console.log(colorList.colors[3].code.rgba);
//   console.log(colorList.colors[4].code.hex);
// for (let color of colorList.colors){
// console.log(color);
// }
for (let color in colorList){
    console.log(colorList[color]);
    
}


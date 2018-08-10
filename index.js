"use strict"; {
    let position = 0;
    let direction = true;
  
    const moveForward = (distance) => {
      if (direction) {
        position += distance;
      } else {
        position -= distance;
      }
      return position;
    }
  
    const moveBackward = (distance) => {
      if(direction) {
        position -= distance;
      } else {
        position += distance;
      }
      return position;
    }
  
    const turnAround = () => {
      direction = !direction;
    }
  
    const printLocation = () => {
      console.log(position);
    }
  
    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
  }
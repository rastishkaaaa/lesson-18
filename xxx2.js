let cnvs2 = document.querySelector('#cnvs2');

if (cnvs2.getContext) {
   let ship = cnvs2.getContext("2d");
   ship.moveTo(80, 200)
   ship.lineTo(530, 200);
   ship.lineTo(480, 250);
   ship.lineTo(130, 250);
   ship.fillStyle = "green";
   ship.fill();
   ship.closePath();
   ship.stroke();

   ship.beginPath();
   ship.moveTo(380, 200)
   ship.lineTo(220, 200)
   ship.lineTo(300, 100);
   ship.fillStyle = "red";
   ship.fill();
   ship.closePath();
   ship.stroke();

   ship.beginPath();
   ship.moveTo(300, 100)
   ship.lineTo(300, 60)
   ship.strokeStyle = "white";
   ship.stroke();

   ship.beginPath();
   ship.moveTo(300, 60)
   ship.lineTo(340, 60)
   ship.lineTo(330, 70)
   ship.lineTo(340, 80)
   ship.lineTo(300, 80)
   ship.strokeStyle = "black";
   ship.fillStyle = "blue";
   ship.fill();
   ship.stroke();
}
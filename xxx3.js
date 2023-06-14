let cnvs3 = document.querySelector('#cnvs3');

if (cnvs3.getContext) {
   let smile = cnvs3.getContext("2d");
   smile.beginPath();
   smile.fill();
   smile.fillStyle = "yellow";
   smile.beginPath();
   smile.arc(150, 120, 115, 0, 2 * Math.PI);
   smile.fill();

   smile.beginPath();
   smile.arc(150, 150, 50, 0, Math.PI, false);
   smile.fill();
   smile.lineWidth = 2;
   smile.strokeStyle = "black";
   smile.stroke()

   smile.beginPath();
   smile.ellipse(110, 90, 20, 30, Math.PI, 0, 2 * Math.PI);
   smile.fillStyle = "black";
   smile.fill();

   smile.beginPath();
   smile.ellipse(180, 90, 20, 30, Math.PI, 0, 2 * Math.PI);
   smile.fillStyle = "black";
   smile.fill();
}
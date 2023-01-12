var Student = {
  name: "Sammy",
  class: 7,
  favorite_subject: "coding",
  marks : [30,35,40,50]
};

function setup() {
  createCanvas(400, 400);
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no);
}

function draw() {
  background(220);
}
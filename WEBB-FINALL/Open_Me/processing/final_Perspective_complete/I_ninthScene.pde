class ninthScene{
//line movement
float angle1;
float angle2;
float Angle1;
float Angle2;
//scene shifts
boolean scene1;
//line movement
float vel1;
float vel2;
float vel3;
float vel4;
float vel5;

boolean angleControl;

  ninthScene(){
  //positions
  x = width/2-2*a/3;
  y = height/2;
  //size
  a = 70;
  me = a/sqrt(3);
  
  vel1 = a*7/3;
  vel2 = a*2;
  vel3 = a*4/3;
  vel4 = a*2/3;
  vel5 = a/3;
  
  
  //penrose triangle
  aa = new PVector(-a*8/3, a/sqrt(3)+me);
  dd = new PVector(a*8/3, a/sqrt(3)+me);
  ff = new PVector(-a*7/3, 2*a/sqrt(3)+me);
  ee = new PVector(a*7/3, 2*a/sqrt(3)+me);
  bb = new PVector(-a/3, -2*a*sqrt(3)+me);
  cc = new PVector(a/3, -2*a*sqrt(3)+me);
  a1 = new PVector(-a/3, -(4*a/sqrt(3))+me);
  a2 = new PVector(0, -sqrt(3)*a+me);
  a3 = new PVector(5*a/3, 0+me);
  a4 = new PVector(a, 0+me);
  a5 = new PVector(-4*a/3, a/sqrt(3)+me);
  a6 = new PVector(-a,0+me);
  
  //line movement2
  angle1 = 100;
  angle2 = 200;
  }
  
  void update(){
    if(angle2>0){
      fill(255);
      movementControl2();
    }
    if(angleControl){
     linemovement1();
    }
 }

void baseShape(){
  //
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  vertex(aa.x, aa.y);
  vertex(bb.x, bb.y);
  vertex(a3.x, a3.y);
  vertex(a4.x, a4.y);
  vertex(a1.x, a1.y);
  vertex(ff.x, ff.y);
  vertex(aa.x, aa.y);
  endShape();
  popMatrix();
  
  //
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  vertex(cc.x, cc.y);
  vertex(dd.x, dd.y);
  vertex(a5.x, a5.y);
  vertex(a6.x, a6.y);
  vertex(a3.x, a3.y);
  vertex(bb.x, bb.y);
  vertex(cc.x, cc.y);
  endShape();
  popMatrix();
  
  //
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  vertex(ee.x, ee.y);
  vertex(ff.x, ff.y);
  vertex(a1.x, a1.y);
  vertex(a2.x, a2.y);
  vertex(a5.x, a5.y);
  vertex(dd.x, dd.y);
  vertex(ee.x, ee.y);
  endShape();
  popMatrix();
}

void movementControl2(){
if(angle1>0){
  angle1--;
}
if(angle2>0){
  angle2--;
}
  Angle1 = map(angle1, 0, 300, 0, TWO_PI);
  Angle2 = map(angle2, 0, 300, 0, TWO_PI);
  
  if(angle2<1){
    angleControl = true;
  }
  
  println(Angle1, Angle2);
  linemovement2();
}

void linemovement1(){
  stroke(0);
  
  //line1(aa to bb) length: a*7/3
  if(vel1>0){ vel1--; }
  else{}
  pushMatrix();
  translate(x+2*a/3,y);
  translate(aa.x, aa.y);
  beginShape();
  line(0,0, vel1, -vel1*sqrt(3));
  endShape();
  popMatrix();
  
  //line2(bb to a3);line3(ff to a4) length: a*5/3
  if(vel2>0){ vel2--; }
  else{}
  pushMatrix();
  translate(x+2*a/3,y);
  translate(bb.x, bb.y);
  beginShape();
  line(0,0, vel2, vel2*sqrt(3));
  line((a1.x-bb.x),(a1.y-bb.y),(a1.x-bb.x)-vel2,(a1.y-bb.y)+vel2*sqrt(3));
  endShape();
  popMatrix();
  
  //line4(a4 to a1) length: a*4/3
  if(vel3>0){ vel3--; }
  else{}
  pushMatrix();
  translate(x+2*a/3,y);
  translate(a4.x, a4.y);
  beginShape();
  line(0,0, -vel3, -vel3*sqrt(3));
  endShape();
  popMatrix();
  
  //line5(a3 to a4) length: a*2/3;
  if(vel4>0){ vel4--; }
  else{}
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  line(a3.x,a3.y, a3.x-vel4,a3.y);
  endShape();
  popMatrix();
  
  //line6(ff to aa) length:
  if(vel5>0){ vel5--;}
  else{}
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  line(ff.x,ff.y, (ff.x-vel5),(ff.y-vel5*sqrt(3)));
  endShape();
  popMatrix();
}

void linemovement2(){
  //part1
  stroke(0);
  pushMatrix();
  translate(x+2*a/3,y);
  beginShape();
  vertex(aa.x, aa.y);
  vertex(bb.x, bb.y);
  vertex(a3.x, a3.y);
  vertex(a4.x, a4.y);
  vertex(a1.x, a1.y);
  vertex(ff.x, ff.y);
  vertex(aa.x, aa.y);
  endShape();
  popMatrix();
  
  //part2
  stroke(0);
  pushMatrix();
  translate(x+2*a/3,y);
  rotate(Angle1);
  beginShape();
  vertex(aa.x, aa.y);
  vertex(bb.x, bb.y);
  vertex(a3.x, a3.y);
  vertex(a4.x, a4.y);
  vertex(a1.x, a1.y);
  vertex(ff.x, ff.y);
  vertex(aa.x, aa.y);
  endShape();
  popMatrix();
  
  //part3
  stroke(0);
  pushMatrix();
  translate(x+2*a/3,y);
  rotate(Angle2);
  beginShape();
  vertex(aa.x, aa.y);
  vertex(bb.x, bb.y);
  vertex(a3.x, a3.y);
  vertex(a4.x, a4.y);
  vertex(a1.x, a1.y);
  vertex(ff.x, ff.y);
  vertex(aa.x, aa.y);
  endShape();
  popMatrix();
}


}

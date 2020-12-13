#include <SoftwareSerial.h>
#include <Servo.h>

Servo thumb,index,middle,little,ring;  

int pt=0,pi=0,pm=0,pl=0,pr=0;
//int pos=0;

SoftwareSerial mySerial(2,3); //(tx,rx)
String string=""; 
void setup()
{
mySerial.begin(9600);
Serial.begin(9600);

    index.attach(5);
  middle.attach(6);
  ring.attach(9);
  little.attach(10);
  thumb.attach(11);
//////////////////////////////////////////////////////////////////

  Serial.println(index.read());
  Serial.println(ring.read());
  Serial.println(middle.read());
  Serial.println(little.read());  
  Serial.println(thumb.read());
  //////////////////////////////
  
  index.write(0);
  ring.write(0);
  middle.write(0);
  little.write(0);
  thumb.write(0);

  //////////////////////////
  delay(2000);
  Serial.println(index.read());
  Serial.println(ring.read());
  Serial.println(middle.read());
  Serial.println(little.read());
  Serial.println(thumb.read());
  delay(500);
}
void loop()
{

 char i;
if (mySerial.available())
{
    i=char(mySerial.read());
    
  Serial.println(i);
  switch(i){
      
    case 'w':
       wave();
       Serial.println("Wave");
       break;
    case 'r':
       rel();
       Serial.println("release");
       break;
    case 'h':
        hold();
        Serial.println("Hold");
        break;
    case '1':
        one();
        Serial.println("1");
        break;
    case 'z':
         rock();
         break;
    case 'y':
         cool();
         break;
    case 'x':
         cuss();
         break;
    case 'o':
         ok ();
         break;
    case '2':
        two();
        Serial.println("2");
        break;
    case '3':
         three();
         Serial.println("3");
         break;
    case '4':
         four();
         break;
   case '5':
         rel();
         break;
    case 's':
          super();
          break;
   default:
     break;
      
       
  }
  
}

}

void wave(){
      while(pi<140 || pr<140 || pm<150 || pl<150 ){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  Serial.println(pl);
  Serial.println(pt);
  
  if(pi!=140 && pl>30 && pr>0 && pm>20) index.write(pi+1);
  if(pm!=150 && pl>30&& pr>0 ) middle.write(pm+1);
  if(pr!=140 && pl>30 ) ring.write(pr+1);
  if(pl!=150) little.write(pl+1);
  delay(15);
  
}
delay(500);

  while(pi>0 || pm>0 || pr>0 || pl>0){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  Serial.println(pl);
  
  if(pi!=0 && pl<50&& pr<70 && pm<100) index.write(pi-1);
  if(pm!=0 && pl<50&& pr<70 ) middle.write(pm-1);
  if(pr!=0 && pl<50 ) ring.write(pr-1);
  if(pl!=0) little.write(pl-1);
  delay(15);
  
}
}
void four(){
      while(pt<150){
  pt=thumb.read();
  Serial.println(pt);
  if(pt!=150) thumb .write(pt+1);
  delay(15);
  
}
delay(2000);
while(pt>0){

  pt=thumb.read();
  Serial.println(pt);
  if(pt!=0) thumb.write(pt-1);
  delay(15);
  
}
}

void three(){
      while(pl<140 && pt<150){
  pl=little.read();
  pt=thumb.read();
  Serial.println(pl);
  Serial.println(pt);
   if(pl!=140) little.write(pl+1);
   
   if(pt!=150) thumb .write(pt+1);
  delay(15);
  
}
delay(2000);
while(pl>0 && pt>0){
  pl=little.read();
  pt=thumb.read();
  Serial.println(pl);
  Serial.println(pt);
  if(pl!=0) little.write(pl-1);
  if(pt!=0) thumb.write(pt-1);
  delay(15);
  
}
}
void two(){
  
    while(pr<140 && pl<140 && pt<150){
   pr=ring.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pr);
  Serial.println(pl);
  Serial.println(pt);
  
  if(pr!=140) ring.write(pr+1);
 if(pl!=140) little.write(pl+1);
 if(pt!=150) thumb.write(pt+1);
  delay(15);
  
}
delay(2000);

while(pr>0 && pl>0 && pt>0){

  pr=ring.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pl);
  Serial.println(pr);
  Serial.println(pt);
  if(pr!=0) ring.write(pr-1);
  if(pt!=0) thumb.write(pt-1);
  if(pl!=0) little.write(pl-1);
  delay(15);
  
}
  
}

void one(){
  
  while(pr<140 && pm<160 && pl<140 && pt<150){
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pm);
  Serial.println(pr);
  Serial.println(pl);
  Serial.println(pt);
  if(pr!=140) ring.write(pr+1);
  if(pm!=160) middle.write(pm+1);
  if(pl!=140) little.write(pl+1);
  if(pt!=150) thumb.write(pt+1);
  delay(15);
  
}
delay(2000);
while(pr>0 && pm>0 && pl>0 && pt>0){
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pm);
  Serial.println(pr);
  Serial.println(pl);
  Serial.println(pt);
  if(pr!=0) ring.write(pr-1);
  if(pm!=0) middle.write(pm-1);
  if(pl!=0) little.write(pl-1);
  if(pt!=0) thumb.write(pt-1);
  delay(15);
  
}
}

void hold(){
  while(pi<160 && pr<160 && pm<160 && pl<160 && pt<160){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  Serial.println(pl);
  Serial.println(pt);
  if(pi!=160) index.write(pi+1);
  if(pr!=160) ring.write(pr+1);
  if(pm!=160) middle.write(pm+1);
  if(pl!=160) little.write(pl+1);
  if(pt!=150) thumb.write(pt+1);
  delay(15);
  
  
}
}

void rel(){
while(pi>0 || pr>0 || pm>0 || pl>0 || pt>0){
//while(pm>0 && pr>0){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  Serial.println(pl);
  Serial.println(pt);
  if(pi!=0) index.write(pi-1);
  if(pr!=0) ring.write(pr-1);
  if(pm!=0) middle.write(pm-1);
  if(pl!=0) little.write(pl-1);
  if(pt!=0) thumb.write(pt-1);
  delay(15);
  
}
  } 

void rock(){
  while(pr<140 && pm<150){
  pr=ring.read();
  pm=middle.read();
  Serial.println(pr);
  Serial.println(pm);
  
  if(pr!=140) ring.write(pr+1);
  if(pm!=150) middle.write(pm+1);
  delay(15);
  
} 
}

void cool(){
  while(pi<150 && pr<140 && pm<150){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  
  if(pi!=150) index.write(pi+1);
  if(pr!=140) ring.write(pr+1);
  if(pm!=150) middle.write(pm+1);
  delay(15);
  
}


}

void cuss(){
  while(pi<150 && pr<150 && pl<140){
  pi=index.read();
  pr=ring.read();
  pl=little.read();
  pt=thumb.read();
  Serial.println(pi);
  Serial.println(pr);
  
  Serial.println(pl);
  Serial.println(pt);
  
  
  if(pi!=140) index.write(pi+1);
  if(pr!=140) ring.write(pr+1);
  if(pl!=140) little.write(pl+1);
  if(pt!=150) thumb.write(pt+1);
  delay(15);
  
}
}

void ok(){
  while(pi<160 && pr<160 && pm<160 && pl<160){
  pi=index.read();
  pr=ring.read();
  pm=middle.read();
  pl=little.read();
  Serial.println(pi);
  Serial.println(pr);
  Serial.println(pm);
  Serial.println(pl);
  if(pi!=160) index.write(pi+1);
  if(pr!=160) ring.write(pr+1);
  if(pm!=160) middle.write(pm+1);
  if(pl!=160) little.write(pl+1);
  delay(15);
  
  
}  
}

void super(){
  while(pi<160 &&  pt<160){
  pi=index.read();
  pt=thumb.read();
  Serial.println(pi);
  Serial.println(pt);
  if(pi!=160) index.write(pi+1);;
  if(pt!=150) thumb.write(pt+1);
  delay(15);
  


}
}
  

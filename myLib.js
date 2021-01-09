function isTouching(object1, object2) //parameters
{ 
 if(Math.abs(object1.x-object2.x) <= (object1.width/2+object2.width/2) && (Math.abs(object1.y-object2.y) <=(object1.height/2+object2.height/2)))
  {
    return true;
  }
  else
  {
    return false;
  }
}




function bounce(o1,o2){
  if(Math.abs(o1.x-o2.x)<=(o1.width/2+o2.width/2)) {

      o1.velocityX= o1.velocityX *-1;
      //wall.velocityX *=-1;
  }}
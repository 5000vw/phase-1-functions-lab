// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let hqlocation = 42
  let blocks;
  if (street > hqlocation){
  blocks = street-hqlocation;
  }
  else{
    blocks = hqlocation- street
  }
  return blocks;

}
function distanceFromHqInFeet(street){
   return distanceFromHqInBlocks(street)*264
}
function distanceTravelledInFeet(start, destination){
  let distance;
  if(start < destination){ 
  distance = (destination - start)*264;
  } else {
    distance = (start - destination)*264;
  }
  return distance
}
function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400){
    return 0;
  }else if (distance > 400 && distance < 2000){
    return (distance - 400)* 2/100;
  }else if (distance > 2000 && distance < 2500){
    return 25
  }else if (distance >2500){
    return "cannot travel that far"
  }
  else{
    return 0;
  }
}

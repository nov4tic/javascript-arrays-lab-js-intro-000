var kittens = ["Milo", "Otis", "Garfield"] //define your array here

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
  return kittens;
}

var appendKitten = name => {
  
}

var prependKitten = name => {
  
}

var removeLastKitten = () => {
  var newArr3 = kittens.slice(0, kittens.length -1);
  return newArr3;
}

var removeFirstKitten = () => {
  
}
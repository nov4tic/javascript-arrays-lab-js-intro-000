var kittens = ["Milo", "Otis", "Garfield"] //define your array here

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten => {
  kittens.pop();
  return kittens;
}

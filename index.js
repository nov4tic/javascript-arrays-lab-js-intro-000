var kittens = ["Milo", "Otis", "Garfield"] //define your array here

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
}

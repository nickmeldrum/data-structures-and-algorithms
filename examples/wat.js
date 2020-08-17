function isPangram(string){
  if (!string || typeof string !== 'string' || !string instanceof String)
    return false;
  
  const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  for (let char of string) {
    const index = x.indexOf(char.toLowerCase());
    if (index > -1) x.splice(index, 1);
    console.log(x);
  }
  
  console.log(x.length);
  return x.length === 0;
}

isPangram('abcdefghijklmnopqrstuvwxyz');

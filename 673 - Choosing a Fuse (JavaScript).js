// Challenge 673 - Choosing a Fuse (JavaScript) - TayqQ

chooseFuse = (current, fuseArray) => {
    
    let idealFuse = Infinity;

    const filteredFuses = fuseArray.filter((fuse) => fuse >= current);

    const sortedFuses = filteredFuses.sort((a,b) => a - b);

    for (let i = 0; i < sortedFuses.length; i++) {
      
        const fuse = sortedFuses[i];
      
        if (fuse >= current){
            
            idealFuse = fuse;

            break;
        }
    }
    return idealFuse;
}

// Example Case

const current = 6;
const fuseArray = [7, 5, 2, 10];
const idealFuse = chooseFuse(current, fuseArray);

console.log(`Ideal Fuse: ${idealFuse}V`)

//  DISCLAIMER: The 2 versions below are optimized solutions by ChatGPT

/* Cleaner and More Memory Efficient:

const chooseFuse = (current, fuseArray) => {
  let idealFuse = Infinity;

  for (let i = 0; i < fuseArray.length; i++) {
    const fuse = fuseArray[i];

    if (fuse === current) {
      return fuse;
    }

    if (fuse > current && fuse < idealFuse) {
      idealFuse = fuse;
    }
  }

  return idealFuse === Infinity ? null : idealFuse;
};

*/

/* One-Liner:

const chooseFuse = (current, fuseArray) => Math.min(...fuseArray.filter(fuse => fuse >= current));

*/
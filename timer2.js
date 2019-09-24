const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07')
  } else if (key > 0 || key < 10) {
    let inputKey = key;
    process.stdout.write(`setting timer for ${inputKey} seconds`);
    setTimeout(()=> {process.stdout.write('BEEP')}, inputKey * 1000);
  } else if ( key === '\u0003') {
    console.log("\nThanks for using me, ciao!")
    setTimeout(() => process.exit(), 2000);
  }

});

// peer editing with @JOadelic
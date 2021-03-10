// Stores the active TCP connection object.
let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  // stdin.on('w', () => {
  //   console.log('Move: up');
  // });
  // stdin.on('a', () => {
  //   console.log('Move: left');
  // })
  // stdin.on('s', () => {
  //   console.log('Move: down');
  // });

  // stdin.on('d', () => {
  //   console.log('Move: right');
  // });
  const handleUserInput = function(key){
  
    if (key === 'w'){
      conn.write('Move: up');
    }
    if (key === 'a'){
      conn.write('Move: left');
    }
    if (key === 's'){
      conn.write('Move: down');
    }
    if (key === 'd'){
      conn.write('Move: right');
    }
    if (key === '\u0003') {
      process.exit();
    };
  };

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  stdin.resume();
  return stdin;
}



module.exports = setupInput;
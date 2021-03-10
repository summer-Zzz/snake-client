const net = require('net');
const {host, port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })

  conn.on('connect', () =>{
    conn.write("Name: SUM");
    conn.write("Say: MEOW");
  })

  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  })

  return conn;
}

module.exports = connect;

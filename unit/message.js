module("Stomp Message");

test("Send and receive a message", function() {
  // var body = Math.random();
  var body = 1;
  
  var client = Stomp.client(TEST.url);
  client.debug = TEST.debug;
  client.connect(TEST.login, TEST.password,

      function() {

          client.send(TEST.destination, {}, body);
      client.subscribe(TEST.destination, function(message)
      {

        start();
        alert(message.body);
      //   equals(message.body, body);
        client.disconnect();
      });
      
      // client.send(TEST.destination, {}, body);
      // client.disconnect();
    });
    stop(TEST.timeout);
});

// test("Send and receive a message with a JSON body", function() {
  
  // var client = Stomp.client(TEST.url);
//  var payload = {text: "hello", bool: true, value: Math.random()};
  
  // client.connect(TEST.login, TEST.password,
  //   function() {
  //     client.subscribe(TEST.destination, function(message)
  //     {
  //       start();
  //       var res = JSON.parse(message.body);
        // console.log('Result: ',res);
        // equals(res.text, payload.text);
        // equals(res.bool, payload.bool);
        // equals(res.value, payload.value);
        // client.disconnect();
      // });
      //
      // client.send(TEST.destination, {}, JSON.stringify(payload));
    // });
    // stop(TEST.timeout);
// });
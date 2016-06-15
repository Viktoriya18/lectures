      var listeners = [];
      function listen(givenEventName, givenCallback){
        listeners.push({
          'eventName': givenEventName,
          'callback': givenCallback
        });
      }
      function trigger(triggeredEventName, eventData){
        listeners.forEach(function(listener){
          if( triggeredEventName == listener.eventName ){
            listener.callback(eventData);
          }
        });
      }
      var button1 = document.getElementById('button1');
      var button2 = document.getElementById('button2');
      var block1 = document.getElementById('block1');
      var block2 = document.getElementById('block2');
      var numMessages = document.getElementById('numMessages');
      var senderName = document.getElementById('senderName');
      var messageText = document.getElementById('messageText');

      button1.addEventListener('click', function(e){
        var eventData = {
          from: 'John',
          message: 'Hello',
          time: getTime()
        };
        trigger('new-message', eventData);
      });

      button2.addEventListener('click', function(e){
        var eventData = {
          from: 'Bill',
          message: 'Make me a sandwitch',
          time: getTime()
        };
        trigger('new-message', eventData);
      });

      /* block 1 reaction */
      var numOfMessages = 0;
      listen('new-message', function block1reaction(eventData){
        numOfMessages++;
        numMessages.innerHTML = numOfMessages;
      });
      
      /* block 2 reaction */
      listen('new-message', function block2reaction(message){
        senderName.innerHTML = message.from;
        messageText.innerHTML = message.message;
        messageTime.innerHTML = message.time;

      });

      listen('new-message', function myFunction(message){
         var node = document.getElementById('block3');
        var textnode = document.createElement('p');
        textnode.innerHTML = "From: " + message.from + "<br>" + "Message " + message.message + "<br>" + "Time: "+ getTime();
        node.appendChild(textnode);
      });

        function getTime(){
          var currentTime = new Date();
          var hours = currentTime.getHours();
          var minutes = currentTime.getMinutes();
            if (minutes < 10 || hours < 10){
          minutes = "0" + minutes
          }
          return hours + ":" + minutes + " ";
      }

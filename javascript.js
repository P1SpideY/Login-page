
       function login()
       {
        var textBox1 = document.getElementById("username"); 
        var message = document.getElementById("msg1");     
        if(textBox1.value=='')
        { 
           message.innerHTML = "Enter Username!"
        } 
        else
        { 
          message.innerHTML = ""
       } 

        var textBox2 = document.getElementById("password");   
        var message = document.getElementById("msg2");        
        var textLength = textBox2.value.length;
          if (textBox2.value=='')
           { 
            message.innerHTML = "Enter Password!"
           }
          else if (textBox2.value.length < 3 || textBox2.value.length > 6)
           { 
             message.innerHTML = "Password Should Be At least 6 digits"
           }
           else if (   3 <= textBox2.value.length <= 6 )
           { 
             message.innerHTML = ""
           }
        
            
              
       }
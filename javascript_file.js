            var f = eval(prompt("Enter a starting value: "));
            var l = eval(prompt("Enter a last value: "));
            console.log("First number: " + f);
            console.log("Last number: " + l);
            var i;
            for(i=f; i<=l; i++){
            if(!(i%15))
                console.log("fizzbuzz");
            else if(!(i%3))
                console.log("fizz");
            else if(!(i%5))
                console.log("buzz");
            else
                console.log(i);
            }
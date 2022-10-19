const express = require("express");
const app = express();

const PORT = 3000
const HOST = 'LOCALHOST';

app.get("/number/:no", (req, res) => {
    try {
        const number = req.params.no;
        var answer = [];
        for (let i = 1; i <= number; i++) {
            var myNumber = "";
            if ((0==i%3)&&(0==i%5)) {
                myNumber = myNumber + "FizzBuzz";
            } else if (0==i%3) {
                myNumber = myNumber + "Fizz";
            } else if (0==i%5) {
                myNumber = myNumber + "Buzz";
            } else {
                myNumber = myNumber + i;
            }
            answer.push(myNumber);
        }
        return res.status(200).json({numbers:answer});
    } catch (err) {
      console.log(err);
      return res.status(500).json({numbers:err});
    }
});

app.get("/test", (req, res) => {
    try {
            return res.status(200).json({test:"ok"});
    } catch (err) {
      console.log(err);
      return res.status(500).json({test:err});
    }
});


 app.listen(PORT,HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

  
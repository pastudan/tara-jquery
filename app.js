var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("jquery-2.0.3.min.js").toString();

jsdom.env({
    file: 'input.html',
    src: [
        jquery
    ],
    done: function(errors, window) {
        var $ = window.$;
        htmlText = $("body").text();
        fs.writeFile("output.txt", htmlText, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The output was saved!");
            }
        });
    }
});
$(document).ready(function(){
    if (annyang) {

        console.log('adding commands');
        var weather = function(){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?appid=efa17477a7e8b2723afdbee014ae0fba&q=London',
                success: function(res) { console.log(res) }
            });
        };
        var news = function(){
            $.ajax({
                url: 'http://content.guardianapis.com/search?api-key=test',
                success: function(res) { console.log(res) }
            });
        };
        var gmail = function(){
            console.log('gmail');
        };
        var twitter = function(){
            console.log('twitter');
        };
        var stocks = function(){
            $.ajax({
                url: 'http://crossorigin.me/http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json',
                success: function(res) { console.log("Apple: " + res) }
            });
            $.ajax({
                url: 'http://crossorigin.me/http://finance.yahoo.com/webservice/v1/symbols/GOOG/quote?format=json',
                success: function(res) { console.log("Google Inc: " + res) }
            });
            $.ajax({
                url: 'http://crossorigin.me/http://finance.yahoo.com/webservice/v1/symbols/CMG/quote?format=json',
                success: function(res) { console.log("Chipotle Mexican Grill: " + res) }
            });

        };

        var commands = {
            '(show me) (todays) weather': weather,
            '(show me) (todays) news': news,
            '(show me) (my) (g)(e)mail': gmail,
            '(show me) (my) twitter': twitter,
            '(show me) (my) tweets': twitter,
            '(show me) (todays) stock(s)': stocks,
        };

        console.log('registering annyang commands');
        annyang.debug();
        annyang.addCommands(commands);

        console.log('starting annyang');
        annyang.start();
    }
});
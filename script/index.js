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
            console.log('news');
        };
        var gmail = function(){
            console.log('gmail');
        };
        var twitter = function(){
            console.log('twitter');
        };
        var stocks = function(){
            console.log('stocks');
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
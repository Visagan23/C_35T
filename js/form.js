class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(250,20);

        var input = createInput("Name");
        input.position(250,160);

        var button = createButton("Play");
        button.position(370,200);
        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);

            var gretting = createElement("h3");
            gretting.html(" Hello " + name);
            gretting.position(250,160);
        });
    }
}
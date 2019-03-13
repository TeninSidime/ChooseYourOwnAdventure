// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across two doors of movies",
            choices: [
                {
                    text: "Deadpool",
                    nextLevel: "deadwoods",
                },

                {
                    text: "Black Panther",
                    nextLevel: "wakanda",
                },
            ]
        },

        wakanda: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across two villains, who are you fighting first?",
            choices: [
                {
                    text: "Will it be Klaws ",
                    nextLevel: "klaws",
                },    {
                    text: "Or will it be Cable",
                    nextLevel: "cable",
                },
            ]
        },

        klaws: {
            message: "Then who is your partner?",
            choices: [
                {
                    text: "Okoye",
                    nextLevel: "fight",
                },  {
                    text:"Or Shuri",
                    nextLevel:"lab"
                }
            ]
        },

    }
};

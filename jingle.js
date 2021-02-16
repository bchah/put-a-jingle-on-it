var jingles = [
    {
        id: 1,
        name: "Sentimental Boys",
        notes: "Thinking of the good times behind us, looking forward to even better times ahead.",
        src: "./jingles/1.mp3"
    },
    {
        id: 2,
        name: "Ease-Us",
        notes: "Bringing you peacefully into another beautiful day on the California coast.",
        src: "./jingles/2.mp3"
    },
    {
        id: 3,
        name: "A Great Honor",
        notes: "Creating a sense of hope, ready for the future to reward it.",
        src: "./jingles/3.mp3"
    },
    {
        id: 4,
        name: "I Love You",
        notes: "An ethereal, prosperous declaration of pure love. Nothing is more powerful.",
        src: "./jingles/4.mp3"
    },
    {
        id: 5,
        name: "Bubbly Hope",
        notes: "This bubbly motif makes you wonder what's coming up next, while still staying cute and playful.",
        src: "./jingles/5.mp3"
    },
    {
        id: 6,
        name: "Organ Fonk",
        notes: "A catchy and upbeat organ groove, to introduce the most wholesome of projects.",
        src: "./jingles/6.mp3"
    },
    {
        id: 7,
        name: "Open Sparkles",
        notes: "The future is now! This sparkly riff is sure to pique interest in your latest creation.",
        src: "./jingles/7.mp3"
    },
    {
        id: 8,
        name: "Keys in the Jar",
        notes: "An exotic, mystical exploration that reaches into your soul but leaves you standing firmly on earth.",
        src: "./jingles/8.mp3"
    },
    {
        id: 9,
        name: "Sunrise",
        notes: "Let the gentle piano and string melody carry you all the way to a crisp and joyful 'ting'.",
        src: "./jingles/9.mp3"
    },

];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function displayJingles() {

    jingles.forEach((jingle) => {

        $("#jingles").append(
            `<div class='col-md-4 jingle'>
            <h3>${jingle.name}</h3>
            <p>${jingle.notes}&nbsp;<a href=${jingle.src} download>Download</a></p>
            <p><audio controls preload='none'><source src=${jingle.src} type="audio/mpeg"></audio></p>
        </div>`);

    });

    $("moo").css("color", getRandomColor());
}
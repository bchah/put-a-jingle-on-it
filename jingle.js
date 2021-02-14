var jingles = [
    {
        id: 1,
        name: "Jingle 1",
        notes: "Let's start the fun times now.",
        src: "./jingles/1.mp3"
    },
    {
        id: 2,
        name: "Jingle 2",
        notes: "Whoop dee doo",
        src: "./jingles/2.mp3"
    },
    {
        id: 3,
        name: "Jingle 3",
        notes: "Wippy wee",
        src: "./jingles/3.mp3"
    }
];

function displayJingles() {

    jingles.forEach((jingle) => {

        var sound = new Howl({
            src: [jingle.src]
          });
          
          

        $("#jingles").append(
        `<div class='col-md-4'>
            <h2>${jingle.name}</h2>
            <p>${jingle.notes}</p>
            <p><a class='btn btn-secondary' href='#' id='j_${jingle.id}' role='button'>Play</a></p>
        </div>`);

        $(`#j_${jingle.id}`).on("click", (event)=>{
            event.preventDefault();
            sound.play();
        })

    });
}
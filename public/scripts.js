var i = 0;
var counter = 0;
var percent = 50;

document.querySelector("#submit").addEventListener("click", (e) => {

    e.preventDefault();

    var tempo = parseInt(document.querySelector("#tempo").value);
    var answer = document.querySelector("#answer")
    var reps = parseInt(document.querySelector("#reps").value)
    var tempos = findTempos(tempo);

    answer.innerHTML =  "<p> Tempo No. " + (i + 1) + ": <strong>" + tempos[i] + " bpm </strong></p>" +
                        
                        "<p>(" + percent + "% of Goal Tempo)</p>" +
                        
                        "<p> Repetition: " + " <strong>" + (counter + 1) + "</strong></p>"
    counter++
    
    
    if (counter >= reps) {
        i++
        percent += 10
        counter = 0
    }


    if (i >= tempos.length) {
        i = 0
        percent = 50;
    }
})

function findTempos(tempo) {
    var sixTempos = []
    for (let i = .50; i <= 1; i += .10) {
        sixTempos.push(Math.round((tempo * i)))
    }
    return sixTempos
}
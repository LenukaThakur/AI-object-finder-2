status=""
object=[]
function setup() {
    canvas = createCanvas(100, 100)
    canvas.position(320, 400)
    video = createCapture(VIDEO)
    video.position(320, 400)
}

function draw() {
    image(video, 0, 0, 100, 100)
    
}

function modelLoaded() {
    console.log('coco is initialised')
    coco.detect(video, gotResults)
    status=true
}

function start(){
    coco = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("Object").innerHTML="Status: Detecting Object"
    document.getElementById("found").value
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        object=results
    }
}
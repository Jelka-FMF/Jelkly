var sortedPositions = [Array.from({ length: 250 }, (_, i) => ({ id: i, x: 0, y: 0, z: 0 })), Array.from({ length: 250 }, (_, i) => ({ id: i + 250, x: 0, y: 0, z: 0 }))];

function parseCSV(url: string) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var rows = data.split('\n');
            var positions = [];
            // console.log("CSV data:", data);
            for (var i = 0; i < rows.length; i++) {
                var cols = rows[i].split(',');
                if (cols.length === 4) {
                    var id = parseFloat(cols[0].trim());
                    var x = parseFloat(cols[1].trim());
                    var y = parseFloat(cols[2].trim());
                    var z = parseFloat(cols[3].trim());
                    positions.push({ id: id, x: x, y: y, z: z });
                }
            }
            // console.log("Parsed positions:", positions);
            sortedPositions = sortPos(positions);
        })
        .catch(error => console.error('Error loading CSV file:', error));
}

interface Position {
    id: number;
    x: number;
    y: number;
    z: number;
}

interface Lamp {
    id: number;
    on: boolean;
    red: number;
    green: number;
    blue: number;
}



function sortPos(positions: Position[]) {
    var v = { x: 1, y: 0 }; // norma po kateri razdelimo lučke na pol
    var spredaj: Position[] = [];
    var zadaj: Position[] = [];
    console.log("sorting positions ...")
    positions.forEach(function (pos) {
        var x = pos.x; // Assuming y is the x-coordinate in your context
        var y = pos.z; // Assuming z is the y-coordinate in your context
        // console.log(x, y);
        if ((v.x * x + v.y * y) > 0) {
            spredaj.push(pos);
        } else {
            zadaj.push(pos);
        }
    });

    return [spredaj, zadaj];
}


function draw(userLights: number[], userColor: { red: number, green: number, blue: number }) {
    // we get in an array of numbers and construct Lamp[] array
    


    console.log("User lights:", userLights);
    let lamps: Lamp[] = [];

    for (let i = 0; i < 500; i++) {
        
        
        var isInUserLights = userLights.includes(i);
        
        lamps.push({
            id: i,
            on: isInUserLights,
            red: userColor.red,
            green: userColor.green,
            blue: userColor.blue
        });
    }


    drawLights(sortedPositions[0], "canvas1", lamps);
    drawLights(sortedPositions[1], "canvas2", lamps);
}

function drawLights(lights: Position[], name: string, LightsOnOff: Lamp[]) {
    var canvas = document.getElementById(name);
    if (!canvas)
        return;
    var ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx)
        return;
    ctx.clearRect(0, 0, (canvas as HTMLCanvasElement).width, (canvas as HTMLCanvasElement).height); // clear
    lights.forEach(function (light) {
        
        const lightStatus = LightsOnOff.find(status => status.id === light.id);
        if (lightStatus && lightStatus.on) {
            // turnOn();
            var y = light.y;
            var z = light.z;
            // scale and translate lights
            var canvasY = (canvas as HTMLCanvasElement).width / 2 + y;
            var canvasZ = (canvas as HTMLCanvasElement).height / 2 - z;
            // drawing - we draw the lights, that are "on" in LightsOnOff
            ctx.beginPath();
            ctx.arc(canvasY, canvasZ, 5, 0, 2 * Math.PI);
            
            if (lightStatus) {
                ctx.fillStyle = `rgb(${lightStatus.red}, ${lightStatus.green}, ${lightStatus.blue})`;
            } /*else {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                ctx.fillStyle = randomColor;
            }*/
            
            ctx.fill();
            console.log("Point (".concat(y.toString(), ", ").concat(z.toString(), ") -> Canvas (").concat(canvasY.toString(), ", ").concat(canvasZ.toString(), ")"));

        } 
        else {
            // pass
        }

            });
}



function main() {
    parseCSV('lucke3d.csv');
}

main()

var positions: {id: number, x: number, y: number, z: number}[] = [];
var sortedPositions = [Array.from({ length: 250 }, (_, i) => ({ id: i, x: 0, y: 0, z: 0 })), Array.from({ length: 250 }, (_, i) => ({ id: i + 250, x: 0, y: 0, z: 0 }))];


function parseCSV(url: string) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var rows = data.split('\n');
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
    console.log("Sorting positions ...")
    positions.forEach(function (pos) {
        var x = pos.x; 
        var y = pos.z; 
        // console.log(x, y);
        if ((v.x * x + v.y * y) > 0) {
            spredaj.push(pos);
        } else {
            zadaj.push(pos);
        }
    });

    return [spredaj, zadaj];
}

function getSphere(x: number, y: number, z: number, r: number, positions: Position[]) {
    var sphere = [];
    for (const pos of positions) {
        var d = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2 + (pos.z - z) ** 2);
        if (d < r) {
            sphere.push(pos.id);
        }
    }
    return sphere;
}

function draw(userLights: number[], userColor: { red: number, green: number, blue: number }) {
    

    // console.log("User lights:", userLights);
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

    var jelkaHW = getJelkaWidthHeight()
    var jelkaHeight = jelkaHW.height
    var jelkaWidth = jelkaHW.width
    var izhodiscey = jelkaHW.izhodiscey
    var izhodiscez = jelkaHW.izhodiscez
    var vrhy = jelkaHW.vrhy
    var vrhz = jelkaHW.vrhz
    drawCanvas(positions, "canvas", lamps, jelkaWidth, jelkaHeight);
}

function drawJelkas(ctx: CanvasRenderingContext2D, canvasWidth: number) {

    var jelkaHW = getJelkaWidthHeight()
    var jelkaHeight = jelkaHW.height
    var jelkaWidth = jelkaHW.width
    var izhodiscey = jelkaHW.izhodiscey
    var izhodiscez = jelkaHW.izhodiscez
    var vrhy = jelkaHW.vrhy
    var vrhz = jelkaHW.vrhz

    // draw jelka 1
    ctx.beginPath();
    ctx.moveTo(0,jelkaHeight); // levo spodaj
    ctx.lineTo(jelkaWidth/2, 0); // vrh
    ctx.lineTo(jelkaWidth, jelkaHeight); // desno spodaj
    ctx.closePath();
    // the fill color
    ctx.fillStyle = "#008000";
    ctx.fill();
    
    // draw jelka 2 (prezrcaljena)
    ctx.beginPath();
    ctx.moveTo(canvasWidth, jelkaHeight); // desno spodaj
    ctx.lineTo(canvasWidth - jelkaWidth/2, 0); // vrh
    ctx.lineTo(canvasWidth - jelkaWidth, jelkaHeight); // desno spodaj
    ctx.closePath();
    // the fill color
    ctx.fillStyle = "#008000";
    ctx.fill();
}

function getJelkaWidthHeight(){
    var canvas = document.getElementById("canvas");
    if (!canvas)
        return {};
    var ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx)
        return {};

    var canvasWidth = (canvas as HTMLCanvasElement).width;
    var canvasHeight = (canvas as HTMLCanvasElement).height;

    // draw jelkas
    var jelka = findIzhodiscneKoordinate(positions, 10000, 100);
    // var izhodisce = {y: 10, z: 5};

    // if (!jelka) {
    //     console.error('Error: izhodisce is undefined');
    //     return; // Exit the function or handle the error appropriately
    // }
    
    var maxJelkaWidth = 0.4 * canvasWidth;
    var maxJelkaHeight = canvasHeight;
    
    var jelkaWidth = maxJelkaWidth;
    var jelkaHeight = (jelka.z - jelka.lz) / (jelka.y - jelka.ly) * jelkaWidth;

    if (jelkaHeight > maxJelkaHeight) {
        jelkaHeight = maxJelkaHeight;
        jelkaWidth = (jelka.ly - jelka.y) / (jelka.lz - jelka.z) * jelkaHeight
    }
    // var jelka_return = {weight:Number, height:Number}
    return {width:jelkaWidth, height:jelkaHeight, izhodiscey:jelka.ly, izhodiscez:jelka.lz, vrhy:jelka.y, vrhz:jelka.z}
}

function drawCanvas(lights: Position[], name:string, LightsOnOff: Lamp[], jelkaWidth:number, jelkaHeight:number) {
    var canvas = document.getElementById(name);
    if (!canvas)
        return;
    var ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx)
        return;
    ctx.clearRect(0, 0, (canvas as HTMLCanvasElement).width, (canvas as HTMLCanvasElement).height); // clear

    var canvasWidth = (canvas as HTMLCanvasElement).width;
    var canvasHeight = (canvas as HTMLCanvasElement).height;


    // draw jelkas

    var jelkaHW = getJelkaWidthHeight()
    var jelkaHeight = jelkaHW.height
    var jelkaWidth = jelkaHW.width
    var izhodiscey = jelkaHW.izhodiscey
    var izhodiscez = jelkaHW.izhodiscez
    var vrhy = jelkaHW.vrhy
    var vrhz = jelkaHW.vrhz
    // var jelka = findIzhodiscneKoordinate(positions, 10000, 100);
    // var izhodisce = {y: 10, z: 5};

    // if (!jelka) {
    //     console.error('Error: izhodisce is undefined');
    //     return; // Exit the function or handle the error appropriately
    // }
    
    // var jelka = getJelkaWidthHeight();
    // var jelkaWidth = jelka.width;
    // var jelkaHeight = jelka.height;

    console.log("Jelka width:", jelkaWidth);
    console.log("Jelka height:", jelkaHeight);

    drawJelkas(ctx, canvasWidth);

    // draw lights
    lights.forEach(function (light) {
        const lightStatus = LightsOnOff.find(status => status.id === light.id);
        if (lightStatus && lightStatus.on) {
        // turnOn();
            var y = jelkaWidth * (light.y - izhodiscey) / (vrhy - izhodiscey) - jelkaWidth / 2; //TODO: check if this is correct, ker ne bi smel bit ampak dela, kar pomen da je najbrž neki drucag narobe aaaaaaaaaaaaaaaaaaaaaaa
            var z = 2* jelkaHeight - (light.z - izhodiscez) / (vrhz - izhodiscez) * jelkaHeight;
            
            if (sortedPositions[1].includes(light)) {
                var y = canvasWidth - y
            }

            // drawing - we draw the lights, that are "on" in LightsOnOff
            ctx.beginPath();
            ctx.arc(y, z, 2, 0, 2 * Math.PI);

            if (lightStatus) {
                ctx.fillStyle = `rgb(${lightStatus.red}, ${lightStatus.green}, ${lightStatus.blue})`;
            }
            ctx.fill()
        }
        else {
            // pass
        }
    })
}

function getCoordinateForLight(id: number, positions: Position[], axis: string) {
    if (axis === 'x') {
        return positions.find(pos => pos.id === id).x;
    }
    if (axis === 'y') {
        return positions.find(pos => pos.id === id).y;
    }
    if (axis === 'z') {
        return positions.find(pos => pos.id === id).z;
    }
    else {
        return 0;
    }
}


function main() {
    parseCSV('lucke3d.csv');
    // console.log(positions)
}

main()

function parseCSV(data) {
    var rows = data.split('\n');
    var positions = [];
    console.log("CSV data:", data);
    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].split(',');
        if (cols.length === 3) {
            var y = parseFloat(cols[1].trim());
            var z = parseFloat(cols[2].trim());
            positions.push({ y: y, z: z });
        }
    }
    console.log("Parsed positions:", positions);
    return positions;
}

function drawLights(lights, name) {
    var canvas = document.getElementById(name);
    if (!canvas)
        return;
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear
    lights.forEach(function (light) {
        var y = light.y;
        var z = light.z;
        // scale and translate lights
        var canvasY = canvas.width / 2 + y;
        var canvasZ = canvas.height / 2 - z;

        ctx.beginPath();
        ctx.arc(canvasY, canvasZ, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'darkred';
        ctx.fill();
        console.log("Point (".concat(y, ", ").concat(z, ") -> Canvas (").concat(canvasY, ", ").concat(canvasZ, ")"));
    });
}

function loadCSVFile(url, name) {
    fetch(url)
        .then(function (response) { return response.text(); })
        .then(function (data) {
        var positions = parseCSV(data);
        drawLights(positions, name);
    })
        .catch(function (error) { return console.error('Error loading CSV file:', error); });
}

loadCSVFile('spredaj.csv', 'canvas1');
loadCSVFile('zadaj.csv', 'canvas2');
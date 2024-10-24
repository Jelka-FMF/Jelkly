function parseCSV(data) {
    var rows = data.split('\n');
    var positions = [];
    console.log("CSV data:", data);
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
    console.log("Parsed positions:", positions);
    return positions;
}

function sortPos(positions) {
    var v = { x: 1, y: 0 }; // norma po kateri razdelimo lučke na pol
    var spredaj = [];
    var zadaj = [];
    console.log("sorting positions ...")
    positions.forEach(function (pos) {
        var x = pos.x; // Assuming y is the x-coordinate in your context
        var y = pos.z; // Assuming z is the y-coordinate in your context
        console.log(x, y);
        if ((v.x * x + v.y * y) > 0) {
            spredaj.push(pos);
        } else {
            zadaj.push(pos);
        }
    });

    return [spredaj, zadaj];
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
        var sortedPositions = sortPos(positions);
        drawLights(sortedPositions[0], 'canvas1');
        drawLights(sortedPositions[1], 'canvas2');
    })
        .catch(function (error) { return console.error('Error loading CSV file:', error); });
}

function main() {
    loadCSVFile('lucke3d.csv', 'canvas');
}

main()

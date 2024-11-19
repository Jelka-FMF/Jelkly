function algorithm_fiksen_zamik (positions: Position[], zamiky: number, zamikz: number) {
    // center of the positions
    var sumY = 0;
    var sumZ = 0;
    for (const light of positions) {
        sumY += light.y
        sumZ += light.z;
    }
    var centerY = sumY / positions.length;

    // prezrcalimo čez simetralo in najdemo najmanjošo koordinato y
    var lefty = Math.min(...positions.map(pos => centerY - Math.abs(centerY - pos.y))) - zamiky; 
    var leftz = Math.min(...positions.map(light => light.y)) - zamikz;
    // lefty in leftz sta sedaj spodnji levi kot jelka


    var biggestKoeficient = Math.max(...positions.map(pos => 
        (pos.y - lefty)/(pos.z - leftz) //koeficient premice
    ));

    var a = centerY; // približna simetrala 
    var b = biggestKoeficient * a; // vrh jelke

    console.log({y:a, z:b, ly:lefty, lz:leftz});
    return {y:a, z:b, ly:lefty, lz:leftz}; // vrh jelke in lev rob jelke
}

function findIzhodiscneKoordinate (positions: Position[], maksZamikY: number, maksZamikZ: number) {
    // generate possible shifts
    var zamikiY = Array.from(Array(100).keys()).map(i => maksZamikY/(i+1));
    var zamikiZ = Array.from(Array(100).keys()).map(i => maksZamikZ/(i+1));

    var mozniZamiki = [];
    for (const zamiky of zamikiY) {
        for (const zamikz of zamikiZ) {
            mozniZamiki.push({y: zamiky, z: zamikz}); // izhodisca
            // mozniVrhovi.push(algorithm_fiksen_a(positions, zamiky, zamikz)); // vrhovi jelk
        }
    }
    var najmanjsaPloscina = Math.min(...mozniZamiki.map(zamik => algorithm_fiksen_zamik(positions, zamik.y, zamik.z).y * algorithm_fiksen_zamik(positions, zamik.y, zamik.z).z));

    //return the shift with the smallest area
    var zamika = mozniZamiki.find(zamik => algorithm_fiksen_zamik(positions, zamik.y, zamik.z).y * algorithm_fiksen_zamik(positions, zamik.y, zamik.z).z === najmanjsaPloscina);
    console.log("plsocina", najmanjsaPloscina);
    var izhodisce = algorithm_fiksen_zamik(positions, zamika.y, zamika.z);
    return izhodisce;
}
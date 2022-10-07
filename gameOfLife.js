var x = 50;
var y = 50;
var pos = [];
var gen = 0;

//var alive = "white";
//var dead = "black";

var currentRun;

createTable(x, y);
pattern("random");
refresh();

function next() {
    calcule();
    refresh();
}

function play(time) {
    currentRun = setInterval(function() {
        calcule();
        refresh();
    }, time)
}

function stop() {
    clearInterval(currentRun);
}

function reset() {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            pos[i][j] = false;
        }
    }
    refresh();
    gen = 0;
    $("h2").html("generation : -")
}

function createTable(x, y) {
    pos = [];

    var table = document.createElement("table");

    let altern = true;

    for (let i = 0; i < x; i++) {
        let tr = document.createElement("tr");
        let posY = [];

        for (let j = 0; j < y; j++) {

            let td = document.createElement("td");
            td.style.width = "10px";
            td.style.height = "10px";
            td.style.padding = "0px";

            td.classList.add("dead");

            if (altern) {
                //td.style.backgroundColor = alive;
            } else {
                //td.style.backgroundColor = dead;
            }
            altern = !altern;
            posY.push(false);

            tr.appendChild(td);
        }
        pos.push(posY);

        altern = !altern;

        table.appendChild(tr);

    }

    $("body")[0].appendChild(table);

}

function calcule() {
    
    let currentPos = JSON.parse(JSON.stringify(pos));

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            
            let nbNeighboor = getAllNeighborOf(i, j, currentPos);
            let cell = pos[i][j];

            //console.log(nbNeighboor);
            if (!(nbNeighboor == 2)) {
                if (cell) {
                    if ((nbNeighboor < 2 || nbNeighboor > 3)) {
                        pos[i][j] = false;
                    }
                } else {
                    if (nbNeighboor == 3) {
                        pos[i][j] = true;
                    }
                }
            }
        }
    }
    gen++;
    $("h2").text("generation : " + gen.toString());
}

function refresh() {

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let td = $("td")[i * x + j]
            if (pos[i][j]) {
                //td.style.backgroundColor = alive;
                td.classList.remove("dead");
                td.classList.add("alive");
            } else {
                //td.style.backgroundColor = dead;
                td.classList.remove("alive");
                td.classList.add("dead");
            }
        }
    }
}

function getAllNeighborOf(xCurrent, yCurrent, posCurrent) {
    let nbNeighboor = 0;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            
            let xi = (xCurrent + i);
            let yj = (yCurrent + j);

            if (!( xi == xCurrent &&  yj == yCurrent)) {
                
                if (!(xi > globalThis.x - 1 || yj > globalThis.y - 1) && !(xi < 0 || yj < 0)) {
                    //console.log(xi.toString() + " : " + yj.toString())
                    //console.log(globalThis.pos[xi][yj])
                    if (posCurrent[xi][yj]) {
                        nbNeighboor++;
                    }
                }
            }
        }
    }

    return nbNeighboor;

}

function pattern(args) {

    //parse for get the command
    var command = "";
    var par = "";
    var isNotCommand = false;
    for (let i = 0; i < args.length; i++) {
        if (isNotCommand) {
            par += args.charAt(i);
        } else {
            command += args.charAt(i);
        }
        if (args.charAt(i) == " ") {
            isNotCommand = true;
        }
    }
    console.log(command);
    console.log(par);

    //parse the text for get parameter
    var parameterList = [];

    var isArg = false;
    var str = "";
    for (let i = 0; i < par.length; i++) {
        if (isArg) {
            str += par.charAt(i);
            console.log(str);
        }
        if (par.charAt(i) == "-") {
            isArg = true;
        }
        if (par.charAt(i) == " ") {
            isArg = false;
            parameterList.push(str);
            str = "";
        }
    }

    console.log(parameterList);

    //default pattern

    if (command == "frog") {
        pos[1][0] = true;
        pos[2][0] = true;
        pos[3][1] = true;

        pos[0][2] = true;
        pos[1][3] = true;
        pos[2][3] = true;
    }

    if (command == "lwss") {
        pos[1][0] = true;
        pos[1][3] = true;

        pos[2][4] = true;

        pos[3][0] = true;
        pos[3][4] = true;

        pos[4][1] = true;
        pos[4][2] = true;
        pos[4][3] = true;
        pos[4][4] = true;
    }


    
    if (command == "canon") {

        let deplace = 3;

        pos[0][25 + deplace] = true;
        
        pos[1][23 + deplace] = true;
        pos[1][25 + deplace] = true;

        pos[2][13 + deplace] = true;
        pos[2][14 + deplace] = true;
        pos[2][21 + deplace] = true;
        pos[2][22 + deplace] = true;
        pos[2][35 + deplace] = true;
        pos[2][36 + deplace] = true;

        pos[3][12 + deplace] = true;
        pos[3][16 + deplace] = true;
        pos[3][21 + deplace] = true;
        pos[3][22 + deplace] = true;
        pos[3][35 + deplace] = true;
        pos[3][36 + deplace] = true;

        pos[4][1 + deplace] = true;
        pos[4][2 + deplace] = true;
        pos[4][11 + deplace] = true;
        pos[4][17 + deplace] = true;
        pos[4][21 + deplace] = true;
        pos[4][22 + deplace] = true;

        pos[5][1 + deplace] = true;
        pos[5][2 + deplace] = true;
        pos[5][11 + deplace] = true;
        pos[5][15 + deplace] = true;
        pos[5][17 + deplace] = true;
        pos[5][18 + deplace] = true;
        pos[5][23 + deplace] = true;
        pos[5][25 + deplace] = true;

        pos[6][11 + deplace] = true;
        pos[6][17 + deplace] = true;
        pos[6][25 + deplace] = true;

        pos[7][12  + deplace] = true;
        pos[7][16  + deplace] = true;

        pos[8][13  + deplace] = true;
        pos[8][14  + deplace] = true;

    }

    if (command == "random") {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                let nb = Math.floor(Math.random() * 100);
                if (nb > 50) {
                    pos[i][j] = true;
                }
            }
        }
    }
}
const initialValues = [4,5,6,7,8,9,10,11,12,13,14];

function sqroot(num) {
    return Math.sqrt(num).toFixed(2);
}

function pow2(num) {
    return num * num;
}

function pow3(num) {
    return num * num * num;
}

function insertIntVals(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        document.getElementById(`iv-${i}`).innerHTML = (initialValues[i]);       
    }     
}

function clearIntVals() {
    for (var i = 0; i < initialValues.length; i++) {
        document.getElementById(`iv-${i}`).innerHTML = " ";       
    }     
}
    
function insertSquares(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        let sq = sqroot(initialValues[i]);
        document.getElementById(`sq-${i}`).innerHTML = sq;
    }
}

function clearSquares() {
    for (var i = 0; i < initialValues.length; i++) {
        let sq = sqroot(initialValues[i]);
        document.getElementById(`sq-${i}`).innerHTML = " ";
    }
}

function insertPow2(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        let pow = pow2(initialValues[i]);
        document.getElementById(`pow2-${i}`).innerHTML = pow;
    }
}

function clearPow2(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        let pow = pow2(initialValues[i]);
        document.getElementById(`pow2-${i}`).innerHTML = " ";
    }
}

function insertPow3(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        let pow = pow3(initialValues[i]);
        document.getElementById(`pow3-${i}`).innerHTML = pow;
    }
}

function clearPow3(arr) {
    for (var i = 0; i < initialValues.length; i++) {
        let pow = pow3(initialValues[i]);
        document.getElementById(`pow3-${i}`).innerHTML = " ";
    }
}
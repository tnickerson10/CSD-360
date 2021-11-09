const myArr = [2, 5, -4,-10, 0, 33, 1, -100];
const arrMap = myArr.map(counter);

function counter(arr) {
    let negCount = 0;
    let zeroCount = 0;
    let posCount = 0;
    for (var i = 0; i <= myArr.length; i++) {
        if(myArr[i] < 0) {
            negCount++
        } else if (myArr[i] == 0) {
            zeroCount++;
        } else if (myArr[i] > 0){
            posCount++
        }
    }
    
    return [negCount, zeroCount, posCount];
} 


document.getElementById('arr-init').innerHTML = `[ ${myArr.join(', ')} ]`;
document.getElementById('arr-final').innerHTML = `[ ${(counter(myArr).join(', '))} ]`;


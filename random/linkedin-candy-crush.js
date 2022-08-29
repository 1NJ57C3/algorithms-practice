const CandyCrush = (string) => {

    // Make "ABBBC" into "AC" (first example).
    // The condition is that if there are 3 repeating patterns (be aware, ABCCCBAB should become AA, second example).
    
    // SOLUTION A
    // let sequence = [];
    
    // for (let i=0; i < string.length; i++) {
    //     let recurrences = 0;
    //     let j = i+1;

    //     console.log("i:", i + "/" + string[i]);

    //     while (string[i] === string[j]) {
    //             recurrences++;
    //             console.log("  j:", j + "/" + string[j], "recurrences:", recurrences);
    //             j++;
    //     };

    //     //// DEPRECATED
    //     //// for (let j=i+1; j < string.length; j++) {
    //     ////     string[i] === string[j] ? recurrences++ : j = string.length-1;
    //     ////     console.log("  j:", j + "/" + string[j], "recurrences:", recurrences);
    //     //// };

    //     recurrences < 2 ? sequence.push(string[i]) : i += recurrences;
    // };

    // SOLUTION B

    let sequence = string.split('');
    let occurences = 0;

    for (let i=0; i < sequence.length; i++) {
        for (let j=i; j < sequence.length; j++) {
            sequence[i] === sequence[j] ? occurences++ : 
            occurences >= 3 ? sequence.splice(i, occurences) : occurences = 0;
        }
    }

    console.log(sequence);
    return sequence.join('');
}

CandyCrush('AABBBC');
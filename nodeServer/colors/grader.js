function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length
    
    return Math.round(avg);
}
    console.log("Average score");
    var scores = [90,80,70,55,66];
    console.log(average(scores));
    var scores2 = [44,55,66,24,74];
    console.log(average(scores2));
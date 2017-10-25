
function firstLast6(array){
    if(array[0]===6 || array[array.length-1]===6){
        return true;
    }else{
        return false;
    }
}

function has23(array2){
    if(array2[0]===2 || array2[0]===3 || array2[array2.length-1]===2 || array2[array2.length-1]===3){
        return true;
    }else{
        return false;
    }
}

function fix23(array3){
    if(array3[0]===2 && array3[1]===3) {
        array3[1] = 0;
        return array3;
    }else if(array3[1]===2 && array3[array3.length-1]===3){
            array3[array3.length-1]=0;
            return array3;
    }else{
        return array3;
    }
}

function countYZ(string){
    var sum = 0;
    string = string.toLowerCase();
    if(string[string.length-1]==="z" || string[string.length-1]==="y"){
        sum++;
    }
    for(var i=0; i< string.length; i++){
        if(string[i]==="z" && string[i+1]===" "){
            sum++;
        }
        if(string[i]==="y" && string[i+1]===" "){
            sum++;
        }
    }
    return sum;
}

function endOther(array4, array5) {
    var array4 = array4.toLowerCase();
    var array5 = array5.toLowerCase();
    if(array4.endsWith(array5)) {
        return true;
    }else if(array5.endsWith(array4)) {
        return true;
    }else{
        return false;
    }
}

function starOut(phrasewithstars) {
    var output = "";
    for (var i = 0; i < phrasewithstars.length; i++) {
        if (phrasewithstars[i] !== "*" && phrasewithstars[i - 1] !== "*" && phrasewithstars[i+1] !== "*") {
            output += phrasewithstars[i];
        }
    }
    return output;
}

function getSandwich(betweentwobreads) {
    var x = betweentwobreads.search("bread") + 5;
    var y = betweentwobreads.lastIndexOf("bread");
    if (x == y+5) {
        return "";
    }
        return betweentwobreads.substring(x, y);

}

function canBalance(nums){
    var sum=0;
    var halfsum= sum/2;
    for(var i=0; i<nums.length; i++){
        sum += nums[i];
        halfsum=0;
        for(var a=i+1; a<nums.length; a++){
            halfsum += nums[a];
        }
        if(sum== halfsum){
            return true;
        }
    }
    return false;
}

function countClumps(clumpz){
    var sum= 0;
    for(var i=0; i<clumpz.length; i++){
        if(clumpz[i]==clumpz[i-1] && clumpz[i]!= clumpz[i-2]){
            sum += 1;
        }
    }
    return sum;
}

function evenlySpaced(a,b,c){
    if((a-b)==(b-c) || (b-a)==(a-c) || (c-a)==(a-b) || (a-c)==(c-b)){
        return true;
    }
    return false;
}




function tester() {
    document.getElementById("output1").innerHTML =evenlySpaced(8,10,12);
}

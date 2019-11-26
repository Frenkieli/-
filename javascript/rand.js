function rand(min,max){
    var num;
    var mix=max-min;
    num=Math.floor(Math.random()*(mix+1))+min;
    return num;
}
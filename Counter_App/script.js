document.getElementById('.button .inc').addEventListener("click", function(){
    let counter = 0;
    counter += 10;
    document.querySelector('.count').innerHTML = counter;
})
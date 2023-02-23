// your code here
let submit = document.getElementById('button');
let h3 = document.getElementById('url');

function url(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;

    if(name != "" && year != ""){
        h3.textContent = 'https://localhost:8080/?name=' +name+"&year="+year;
    }else{
        if(name != ""){
            h3.textContent = 'https://localhost:8080/?name=' +name;
        }else if(year != ""){
            h3.textContent = 'https://localhost:8080/?year=' +year;
        }else{
            h3.textContent= 'https://localhost:8080/';
        }
    }

}

submit.addEventListener('click',url);
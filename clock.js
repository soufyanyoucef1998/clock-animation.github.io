let Div = document.getElementById('div');

let left = true;

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
       },
      {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED"
       },
      {
        time: "13:21",
        destination: "DUBAI",
        flight: "DXB 201",
        gate: "A 19",
        remarks: "CANCELLED"
      },
      {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 402",
        gate: "B 02",
        remarks: "ON TIME"
      },
      {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A 32",
        remarks: "DELAYED"
      }
  ]

 function messages() {
   
     for(let gates of flights){
        let creatTxt = document.createElement('div');
       
       
        if(left){
            creatTxt.classList.add('left');
        }else{
            creatTxt.classList.add('right'); 
        }
        creatTxt.innerHTML = gates.flight;
   Div.appendChild(creatTxt);
   left = !left;
  }
}
messages();
function creat(){
    let anArray = Array.from
    flights.shift();
    flights.push({
     flight: randomLetter() + randomLetter() + randomNumber() + randomNumber()+' ' + randomNumber()+ randomLetter() + randomNumber()
         })
         Div.textContent = '';
         messages();
       

}


setInterval(creat,1000)


function randomLetter(){
    let lett = 'AZERTYUIOPµMLKJHGFDSQWXCVBN';
    return lett.charAt(Math.floor(Math.random()  * lett.length))
  }
  function randomNumber(maxNum){
    let NUM = '0123456789';
    return NUM.charAt(Math.floor(Math.random()  * NUM.length))
  }
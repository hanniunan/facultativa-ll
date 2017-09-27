


document.getElementById('monto').addEventListener('input', function (e) {


     let m = e.target.value;

   
   document.getElementById('interesa') .innerHTML = (m*0.02).toFixed(2);
   document.getElementById('reva') .innerHTML = (m*0.05).toFixed(2);
   document.getElementById('totala') .innerHTML = ((m*0.02)+(m*0.05)).toFixed(2);


     document.getElementById('interes') .innerHTML =((m*0.02)/12).toFixed(2);
   document.getElementById('rev') .innerHTML = ((m*0.05)/12).toFixed(2);
   document.getElementById('total') .innerHTML = (((m*0.02)+(m*0.05))/12).toFixed(2);
});



document.getElementById('años').addEventListener('input', function (e) {


     let m = e.target.value;



   document.getElementById('interesa') .innerHTML = ((m*0.0392)/12).toFixed(2);
   document.getElementById('reva') .innerHTML = (m*0.05).toFixed(2);
   document.getElementById('CDP1') .innerHTML = (m*3.92).toFixed(2);
   document.getElementById('totala') .innerHTML =(((m*0.02)+(m*0.05)+(m*3.92))/12).toFixed(2);
   


   document.getElementById('interes') .innerHTML =((m*0.0488)/24).toFixed(2);
   document.getElementById('rev') .innerHTML = (m*0.05).toFixed(2);
   document.getElementById('CDP2') .innerHTML = ((m*4.88)/24).toFixed(2);
   document.getElementById('total') .innerHTML = (((m*0.02)+(m*0.05)+(m*4.88))/24).toFixed(2);
});



document.getElementById('monto').addEventListener('input', function (e) {


     let m = e.target.value;

   
   document.getElementById('interesa') .innerHTML = (m*0.02).toFixed(2);
   document.getElementById('reva') .innerHTML = (m*0.05).toFixed(2);
   document.getElementById('totala') .innerHTML = ((m*0.02)+(m*0.05)).toFixed(2);


     document.getElementById('interes') .innerHTML =((m*0.02)/12).toFixed(2);
   document.getElementById('rev') .innerHTML = ((m*0.05)/12).toFixed(2);
   document.getElementById('total') .innerHTML = (((m*0.02)+(m*0.05))/12).toFixed(2);
});



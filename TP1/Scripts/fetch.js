fetch('https://log2420-serve.herokuapp.com/JSON/output.json')
      .then(function (response) {
        return response.json();})
      .then(function (data) {
         console.log(data);
         for(var i=0;i<data.Elections.length;i++){
            document.getElementsByClassName('Electionslabel')[i].innerHTML= data.Elections[i].name ;
            document.getElementsByClassName('ElectionsSub-label')[i].innerHTML= data.Elections[i].date;
         }
         for(var i=0;i<data.PartisFederaux.length;i++){
            document.getElementsByClassName('PartisFederauxlabel')[i].innerHTML= data.PartisFederaux[i].abreviation ;
            document.getElementsByClassName('PartisFederauxSub-label')[i].innerHTML= data.PartisFederaux[i].fullname;
         }
         for(var i=0;i<data.PartisProvinciaux.length;i++){
            document.getElementsByClassName('PartisProvinciauxlabel')[i].innerHTML= data.PartisProvinciaux[i].abreviation ;
            document.getElementsByClassName('PartisProvinciauxSub-label')[i].innerHTML= data.PartisProvinciaux[i].fullname;
         }
       })
      .catch(function (err) {
          console.warn('Something went wrong.', err);
      });

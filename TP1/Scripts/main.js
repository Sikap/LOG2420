let displayFederals = () => {
    console.log('federals');
    var x = document.getElementById('PartisProvinciaux').style.display="none";
    var x = document.getElementById('PartisFederaux').style.display="block";
};

let displayProvincials = () => {
    console.log('provincials');
    var x = document.getElementById('PartisFederaux').style.display="none";
    var x = document.getElementById('PartisProvinciaux').style.display="block";
};

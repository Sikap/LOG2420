
class sectionsManager {
    selectionsCounter;

    constructor(){
        this.selectionsCounter = 0;
    }

    displayFederals = () => {
        document.getElementById('PartisProvinciaux').style.display = "none";
        document.getElementById('PartisFederaux').style.display = "block";
        document.getElementById('titlePartis').innerHTML ="Partis politiques fédéreaux";
    };

    displayProvincials = () => {
        document.getElementById('PartisFederaux').style.display = "none";
        document.getElementById('PartisProvinciaux').style.display = "block";
        document.getElementById('titlePartis').innerHTML ="Partis politiques provinciaux";
    };

    updateSelectionsCounter = (elementId) => {
        let checkBox = document.getElementById(elementId);
        if(checkBox.checked){
        this.selectionsCounter--;
        } else {
            this.selectionsCounter++;
        }
        this.allowChoices();
    };

    allowChoices = () => {
        if (this.selectionsCounter === 0 || this.selectionsCounter > 2) {
            document.getElementById('showButton').setAttribute('disabled', true);
            document.getElementById('compareButton').setAttribute('disabled', true);
            document.getElementById('showButton').style.backgroundColor = 'lightgray';
            document.getElementById('compareButton').style.backgroundColor = 'lightgray';
            document.getElementById('showButton').style.color = 'grey';
            document.getElementById('compareButton').style.color = 'grey';
        }
        if (this.selectionsCounter === 1) {
            document.getElementById('showButton').removeAttribute('disabled');
            document.getElementById('showButton').style.backgroundColor = 'dodgerblue';
            document.getElementById('showButton').style.color = 'white';
            document.getElementById('compareButton').setAttribute('disabled', true);
            document.getElementById('compareButton').style.backgroundColor = 'lightgray';
            document.getElementById('compareButton').removeAttribute('style.color');
            document.getElementById('compareButton').style.color = 'grey';
        }
        if (this.selectionsCounter === 2) {
            document.getElementById('compareButton').removeAttribute('disabled');
            document.getElementById('compareButton').style.backgroundColor = 'dodgerblue';
            document.getElementById('compareButton').style.color = 'white';
            document.getElementById('showButton').removeAttribute('style.color');
            document.getElementById('showButton').style.backgroundColor = 'lightgray';
            document.getElementById('showButton').setAttribute('disabled', true);
        }

    };

}

let manager = new sectionsManager();



confirmShow = () => {
    document.getElementById('returnButton').style.display="block";
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('showPage').style.width = '80%' ;
    document.getElementById('showPage').style.display = 'block';
};

confirmCompare = () => {
    document.getElementById('returnButton').style.display="block";
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('comparePage').style.display = 'block';
    document.getElementById('showPage').style.display = 'block';
    document.getElementById('showPage').style.width = '40%' ;
    document.getElementById('comparePage').style.width = '40%';
};

transformStar = (starId) => {
    firstclick = true;
    if(document.getElementById(starId).style.backgroundColor === 'gold'){
        document.getElementById(starId).style.backgroundColor = 'white';
    } else{
        if(document.getElementById(starId).style.backgroundColor === 'white' || firstclick){
            document.getElementById(starId).style.backgroundColor = 'gold';
            firstclick = false;
            }
    }
};

goback = () => {
    document.getElementById('returnButton').style.display="none";
    document.getElementById('main-section').style.display = 'block';
    document.getElementById('showPage').style.display = 'none';
    document.getElementById('comparePage').style.display = 'none';

};

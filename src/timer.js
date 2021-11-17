//VUE

// const buttonStart = timerStart;
// const buttonPause = timerPause;
// const buttonResume = timerResume;
// const chrono = timerTime;

const buttonStart = $("#timerStart");
const buttonPause = $("#timerPause");
const buttonResume = $("#timerResume");
const chrono = $("#timerTime");

//MODEL
const maxTime= 3559;
let secondPast =0;
let minutePast=0;
let valclear;
let affichagemin="00";
let affichagesec="00";

const counterTimer = () => {

    secondPast++;
    chrono.text(`${affichagemin}:${affichagesec}`);

if(secondPast<10)
{

affichagesec=`0${secondPast}`;

}else if(10<=secondPast<60){
    affichagesec=`${secondPast}`;
}

if(secondPast===60){

    secondPast=0;
    minutePast++;
    }  


    if(minutePast<10)
    {
        affichagemin=`0${minutePast}`;

    }else if(10<=minutePast<60){
        affichagesec=`${minutePast}`;
    }
if(minutePast===15)
{
    restart();
    return;
}
}


const chronoStart = () => {

pushButton(buttonStart,buttonPause);
valclear = setInterval(counterTimer,1000);
      $(".case").removeClass("circle");
      $(".case").removeClass("cross");
      minutePast=0;
      secondPast=0;
      affichagemin="00";
      affichagesec="00";
      chrono.text(`${affichagemin}:${affichagesec}`);


};

const chronoPause = () => {
    pushButton(buttonPause,buttonResume);
    clearInterval(valclear);
};

const chronoResume = () => {
  
pushButton(buttonResume,buttonPause);
valclear = setInterval(counterTimer,1000);

};

const pushButton = (a,b) => {
    a.removeClass('d-block');
    a.addClass('d-none');
    //equivalent : a.removeClass('d-block').addClass('d-none')
    // appelé chainage d'appel
    b.removeClass('d-none');
    b.addClass('d-block');
};

buttonStart.on("click", chronoStart);
buttonPause.on("click", chronoPause);
buttonResume.on("click", chronoResume);




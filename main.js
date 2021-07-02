var prediction_1 = "" ;
var prediction_2 = "" ;
Webcam.set({
    height:300,
    width:300,
    img_format:'png',    
    png_quality:90
});


 var camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:"+ml5.version);
 var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ifSyWj92E/model.json',model_loaded());
 function model_loaded(){
     console.log("model loaded");
 }

function speak(){
 var synth = window.speechSynthesis;
 var speak_data_1="the first preediction is "+prediction_1;
 var speak_data_2="and the second preediction is "+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 synth.speak(utterthis);
}

function check() {
img = document.getElementById("captured_img");
 classifier.classify(img, got_result); } 


function got_result(error,result){
  if (error){
      console.log(error);
  }else{
      console.log(result);
      document.getElementById("result_name").innerHTML= result[0].label;
      document.getElementById("result_name_1").innerHTML= result[1].label;
      prediction_2=result[1].label;
      prediction_1=result[0].label;
      speak();
      if( prediction_1 == "happy" ) {
          document.getElementById("result_emoji").innerHTML="&#128512;";
      }
      if( prediction_1 == "sad" ) {
        document.getElementById("result_emoji").innerHTML="&#x1f61e;";
    }
    if( prediction_1 == "angry" ) {
        document.getElementById("result_emoji").innerHTML="&#128545;";
    }
    if( prediction_1 == "afraid" ) {
        document.getElementById("result_emoji").innerHTML="&#128548;";
    }if( prediction_2 == "happy" ) {
        document.getElementById("result_emoji").innerHTML="&#128512;";
    }
    if( prediction_2 == "sad" ) {
      document.getElementById("result_emoji").innerHTML="&#x1f61e;";
  }
  if( prediction_2 == "angry" ) {
      document.getElementById("result_emoji").innerHTML="&#128545;";
  }
  if( prediction_2 == "afraid" ) {
      document.getElementById("result_emoji").innerHTML="&#128548;";
  }
    
  }

}








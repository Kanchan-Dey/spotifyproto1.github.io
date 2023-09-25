let songIndex=0;
let audioElement=new Audio('img/audio/1.mp3');
let masterPlay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("progressbar");
let gif=document.querySelector("#gid");
let songinfoname=document.getElementById("songinfoname");
let songitems=Array.from(document.getElementsByClassName("songitem"));
let songs=[{songname:"The Weeknd-Starboy", filePath:"https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB?si=ca9143f36f2942c8", coverPath:"https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"},
{songname:"The Weeknd-Popular", filePath:"https://open.spotify.com/track/6WzRpISELf3YglGAh7TXcG?si=8805a8eb43184392", coverPath:""},
{songname:"The Weeknd-Die For You", filePath:"audio/3.mp3", coverPath:""},
{songname:"The Weeknd-Creepin", filePath:"audio/4.mp3", coverPath:""},
{songname:"The Weeknd-Blinding lights", filePath:"audio/5.mp3", coverPath:""},
{songname:"The Weeknd-Save Your tears", filePath:"audio/6.mp3", coverPath:""},
{songname:"The Weeknd-Is there someone else", filePath:"audio/7.mp3", coverPath:""},]

songitems.forEach(function(element,i){
   
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('ri-play-fill');
        masterPlay.classList.add('ri-pause-fill');
        gif.style.opacity=1;
       
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-fill');
        masterPlay.classList.add('ri-play-fill');
        gif.style.opacity=0;
       
        
    }
})


//progressbar
audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myprogressbar.value=progress;
})
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime=parseInt((myprogressbar.value*audioElement.duration)/100);
})

const makeAllplay=()=>
{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("ri-pause-fill");
        element.classList.add("ri-play-fill");
    })

}



Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
  element.addEventListener('click',function(e){
   
    if(e.target.classList.contains("ri-play-fill")){
        makeAllplay();
        var index=parseInt(e.target.id);
        e.target.classList.remove("ri-play-fill");
        e.target.classList.add("ri-pause-fill");
        audioElement.src=`audio/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.add("ri-pause-fill");
        masterPlay.classList.remove("ri-play-fill");
        gif.style.opacity=1;
    }
    else{
       
        var index=parseInt(e.target.id);
        e.target.classList.remove("ri-pause-fill");
        e.target.classList.add("ri-play-fill");
        audioElement.src=`audio/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.pause();
        masterPlay.classList.add("ri-play-fill");
        masterPlay.classList.remove("ri-pause-fill");
        gif.style.opacity=0;

    }
  })
})
function next(){
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`audio/${songIndex+1}.mp3`;
    songinfoname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add("ri-pause-fill");
    masterPlay.classList.remove("ri-play-fill");
})
}
next();
document.getElementById("prev").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`audio/${songIndex+1}.mp3`;
    songinfoname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add("ri-pause-fill");
    masterPlay.classList.remove("ri-play-fill");
})


const AlterBridge = document.querySelector(".Alter_Bridge");
const Asia = document.querySelector(".Asia");
const Avici = document.querySelector(".Avici");
const Yunhi = document.querySelector(".Yunhi")
const fc5 = document.querySelector(".fc5");
const coldPlay = document.querySelector(".coldplay");

const Songname = document.querySelector(".Song_name");
const Playpause = document.getElementById("Playpause");
const nextBtn = document.getElementById("nextbtn");
const playBtn = document.getElementById("playbtn");
const prevBtn = document.getElementById("prevbtn")
const songs = [
{ele:AlterBridge , audioName: ' AlterBridge '},
{ele:Asia,audioName:" Asia "},
{ele:Avici,audioName:" Avici "},
{ele:Yunhi,audioName:" Yunhi "},
{ele:fc5,audioName:" fc5 "},
{ele:coldPlay,audioName:" coldPlay "}
]


for(const song of songs)
{
    song.ele.addEventListener('ended',()=>
{
    updateSong('next');
    Playpausefun();
})
}

let current = 0;
let currentSong = songs[current].ele;
Songname.textContent = songs[current].audioName;


playBtn.addEventListener("click",() => 
{
  Playpausefun();
} )


nextBtn.addEventListener('click',() =>
{
  updateSong('next');
  Playpausefun();
})

prevBtn.addEventListener('click',() =>
{
    updateSong('prev');
})


const updateSong = (action) =>
{
    currentSong.pause();
    currentSong.currentTime = 0;
    if(action === 'next')
    {
        current = current + 1;
        if(current > songs.length - 1)
        {
            current = 0;
        }
       
    }
    if(action === 'prev')
    {
        current = current - 1;
        if(current < 0)
        {
            current = songs.length - 1;
        }
    }
    currentSong = songs[current].ele;
    Songname.textContent = songs[current].audioName;
}

const Playpausefun = () =>
{
    if(currentSong.paused)
    {
     currentSong.play();
     Playpause.className = 'ph-bold ph-pause';
    }
    else
    {
     currentSong.pause();
     Playpause.className = 'ph-bold ph-play';
    }
}

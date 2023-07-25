console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Daulat Sauharat", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Apna Banale", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chann Sitare", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Udaarian", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Khali Khali Dil", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tootey Khaab", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Khamosiyan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Love Me Thoda Or", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Uska Hi Banana", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Guitar Sikhda", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "MahaBharat Rap", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Aarambh Hai Prachand", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Aghori", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Chillam Ka Sutta", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Bholenath2(The destroyer)", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Uttrakhand Ke Raja", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Damru Aala", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Kisi Ko Bhang Ka Nasha", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Bhang Ragad Ke", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Bholenath1(The Love Story)", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "chillam ka sutta", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "A", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "B", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "C", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "D", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "E", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Khali Khali Dil", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "Tootey Khaab", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Khamosiyan", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Love Me Thoda Or", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "Uska Hi Banana", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "Guitar Sikhda", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "MahaBharat Rap", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {songName: "Aarambh Hai Prachand", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {songName: "Aghori", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
    {songName: "Chillam Ka Sutta", filePath: "songs/36.mp3", coverPath: "covers/36.jpg"},
    {songName: "Bholenath2(The destroyer)", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {songName: "Uttrakhand Ke Raja", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {songName: "Damru Aala", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {songName: "Kisi Ko Bhang Ka Nasha", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {songName: "Bhang Ragad Ke", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {songName: "Bholenath1(The Love Story)", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {songName: "chillam ka sutta", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},
    {songName: "Bholenath1(The Love Story)", filePath: "songs/44.mp3", coverPath: "covers/44.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

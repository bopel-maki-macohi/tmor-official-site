let ost = [
    {
        name: "Alert",
        video: 'https://youtu.be/dZ8UYfj4UJo?si=_oYk882c4NwfzC4N',
        wav: "Alert.wav",
    },
    {
        name: "Charge Up (Teaser Trailer Song)",
        video: 'https://www.youtube.com/watch?v=hbAAHGGKP2I',
        wav: "ChargeUp (Trailer).wav",
    },
    {
        name: "Expose",
        video: 'https://www.youtube.com/watch?v=_CPRCIroh9c',
        wav: "Expose.wav",
    },
    {
        name: "Planning",
        video: null,
        wav: "Planning.wav",
    },
    {
        name: "Special Stage",
        video: null,
        wav: "SpecialStage.wav",
    },
    {
        name: "Restoration",
        video: null,
        wav: "Restoration.wav",
    },
    {
        name: "Core Heat",
        video: null,
        wav: "CoreHeatV2_Short.wav",
    },
]
var weburl = document.getElementById('WEBURL').innerHTML

var songDiv = document.getElementById('songs');

var unsupported = document.createElement('p');
unsupported.innerHTML = 'Your browser does not support the audio type: WAV';


ost.forEach(track => {

    var trackAudioHeader = document.createElement('h1');
    var trackAudioHeaderLink = document.createElement('a');

    var trackAudio = document.createElement('audio');
    var audioSource = document.createElement('source');

    trackAudio.controls = true;
    trackAudio.loop = true;

    audioSource.src = weburl + 'res/projects/tmor-coreharvester/ost/' + track.wav;
    audioSource.type = 'audio/wav';

    audioSource.appendChild(unsupported)
    trackAudio.appendChild(audioSource);

    if (track.video != null && track.video.length >= 'www.'.length)
        trackAudioHeaderLink.href = track.video;

    trackAudioHeaderLink.innerHTML = track.name;
    trackAudioHeader.appendChild(trackAudioHeaderLink);


    songDiv.appendChild(trackAudioHeader);
    songDiv.appendChild(trackAudio);
    songDiv.appendChild(document.createElement('br'));

    console.log(track.name);
});

console.log(songDiv.children);

let ost = [
    {
        name: "Alert",
        video: 'https://youtu.be/dZ8UYfj4UJo?si=_oYk882c4NwfzC4N',
        wav: "./res/ost/Alert.wav",
    },
    {
        name: "Charge Up (Teaser Trailer Song)",
        video: null,
        wav: "./res/ost/ChargeUp (Trailer).wav",
    },
    {
        name: "Expose",
        video: null,
        wav: "./res/ost/Expose.wav",
    },
    {
        name: "Planning",
        video: null,
        wav: "./res/ost/Planning.wav",
    },
    {
        name: "Special Stage",
        video: null,
        wav: "./res/ost/SpecialStage.wav",
    },
    {
        name: "Restoration",
        video: null,
        wav: "./res/ost/Restoration.wav",
    },
    {
        name: "Core Heat",
        video: null,
        wav: "./res/ost/CoreHeatV2_Short.wav",
    },
]

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

    audioSource.src = track.wav;
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

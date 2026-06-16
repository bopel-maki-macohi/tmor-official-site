let ost = [
    {
        name: "Alert",
        video: '',
        wav: "./res/ost/Alert.wav",
    },
    {
        name: "Expose",
        video: null,
        wav: "./res/ost/Expose.wav",
    }
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

const bizFile = [
    "sfx/clippedTransmission.wav",
    "sfx/creatureTalk.wav",
    "sfx/farmStrange.wav",
    "sfx/hypnoLoop.wav",
    "sfx/internalsWave.wav",
    "sfx/pumpFreq.wav",
    "sfx/trafficHum.wav",
    "sfx/trainDrone.wav",
    "sfx/unknownIdle.wav"
];

const bizSounds = [
    "bizAudio1",
    "bizAudio99",
    "bizAudio419",
    "bizAudio8",
    "bizAudio311",
    "bizAudio76",
    "bizAudio808",
    "bizAudio000",
    "bizAudio16"
];

function selectAudio(event){
	stopTrack();
	if(bizSounds.includes(event.id)){
		document.getElementById("selection").innerHTML = "Selección " + event.id;
        sendEventToUnreal("BPSelectAudio", {TrackName: event.id});
	}else{
		document.getElementById("selection").innerHTML = "Selecciona un sonido";
	}
}

function playTrack() {
    sendEventToUnreal("PlayAudio", {});
}

function stopTrack() {
    sendEventToUnreal("StopAudio", {});
}

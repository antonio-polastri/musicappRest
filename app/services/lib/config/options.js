"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfSeachMusicb = exports.typeOfSeachDiscogs = exports.typeOfSeachDez = exports.typeOfSeachDeezen = void 0;
class typeOfSeachDeezen {
    constructor() {
        this.artist = 'artist:';
        this.album = 'album:';
        this.track = 'track:';
        this.label = 'label:';
        this.dur_min = 'dur_min';
        this.dur_max = 'dur_max';
        this.bpm_min = 'bpm_min';
        this.bpm_max = 'bpm_max';
    }
}
exports.typeOfSeachDeezen = typeOfSeachDeezen;
exports.typeOfSeachDez = {
    artist: 'artist',
    album: 'album',
    track: 'track',
    label: 'label',
    dur_min: 'dur_min',
    dur_max: 'dur_max',
    bpm_min: 'bpm_min',
    bpm_max: 'bpm_max'
};
exports.typeOfSeachDiscogs = {
    artist: 'artist',
    album: 'release',
    track: 'track',
    label: 'label',
    dur_min: 'dur_min',
    dur_max: 'dur_max',
    bpm_min: 'bpm_min',
    bpm_max: 'bpm_max'
};
exports.typeOfSeachMusicb = {
    artist: 'artist',
    album: 'release-group',
    track: 'recording',
    label: 'label',
    dur_min: 'dur_min',
    dur_max: 'dur_max',
    bpm_min: 'bpm_min',
    bpm_max: 'bpm_max'
};

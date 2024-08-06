import { MidiDevice } from "../types";

export const midiCCs = [
    {
        name: "Octatrack",
        deviceParamters: [
            {
                groupName: "Track volumes",
                ccs: [
                    {
                        parameterName: "Track level",
                        number: 7,
                    },
                    { parameterName: "Track balance", number: 8 },
                    { parameterName: "Track level", number: 46 },
                    { parameterName: "Cue level", number: 47 },
                    { parameterName: "Crossfader", number: 48 },
                    {
                        parameterName: "Track Mute",
                        number: 49,
                    },
                    {
                        parameterName: "Track Solo",
                        number: 50,
                    },
                    {
                        parameterName: "Track Cue",
                        number: 51,
                    },
                    {
                        parameterName: "Track Arm",
                        number: 52,
                    },
                ],
            },
            {
                groupName: "Playback page",
                ccs: [
                    { parameterName: "Playback param #1", number: 16 },
                    { parameterName: "Playback param #2", number: 17 },
                    { parameterName: "Playback param #3", number: 18 },
                    { parameterName: "Playback param #4", number: 19 },
                    { parameterName: "Playback param #5", number: 20 },
                    { parameterName: "Playback param #6", number: 21 },
                ],
            },
            {
                groupName: "Amp page",
                ccs: [
                    { parameterName: "Amp param #1 (Attack)", number: 22 },
                    { parameterName: "Amp param #2 (Hold)", number: 23 },
                    { parameterName: "Amp param #3 (Release)", number: 24 },
                    { parameterName: "Amp param #4 (Volume)", number: 25 },
                    { parameterName: "Amp param #5 (Balance)", number: 26 },
                    { parameterName: "Amp param #6 (N/A)", number: 27 },
                ],
            },
            {
                groupName: "LFO page",
                ccs: [
                    { parameterName: "LFO param #1 (Speed 1)", number: 28 },
                    { parameterName: "LFO param #2 (Speed 2)", number: 29 },
                    { parameterName: "LFO param #3 (Speed 3)", number: 30 },
                    { parameterName: "LFO param #4 (Depth 1)", number: 31 },
                    { parameterName: "LFO param #5 (Depth 2)", number: 32 },
                    { parameterName: "LFO param #6 (Depth 3)", number: 33 },
                ],
            },
            {
                groupName: "FX1 page",
                ccs: [
                    { parameterName: "FX1 param #1", number: 34 },
                    { parameterName: "FX1 param #2", number: 35 },
                    { parameterName: "FX1 param #3", number: 36 },
                    { parameterName: "FX1 param #4", number: 37 },
                    { parameterName: "FX1 param #5", number: 38 },
                    { parameterName: "FX1 param #6", number: 39 },
                ],
            },
            {
                groupName: "FX2 page",
                ccs: [
                    { parameterName: "FX2 param #1", number: 40 },
                    { parameterName: "FX2 param #2", number: 41 },
                    { parameterName: "FX2 param #3", number: 42 },
                    { parameterName: "FX2 param #4", number: 43 },
                    { parameterName: "FX2 param #5", number: 44 },
                    { parameterName: "FX2 param #6", number: 45 },
                ],
            },
            {
                groupName: "Recording",
                ccs: [
                    {
                        parameterName: "Recrdr Arm",
                        number: 53,
                    },
                    {
                        parameterName: "All Arm",
                        number: 54,
                    },
                    { parameterName: "Pickup SRC AB level", number: 57 },
                    { parameterName: "Pickup SRC CD level", number: 58 },
                ],
            },
            {
                groupName: "Scenes",
                ccs: [
                    { parameterName: "Scene A Select", number: 55 },
                    { parameterName: "Scene B Select", number: 56 },
                ],
            },
            {
                groupName: "Notes",
                ccs: [
                    { parameterName: "Note on", number: 59 },
                    { parameterName: "Note off", number: 60 },
                    { parameterName: "Send request", number: 61 },
                ],
            },
            {
                groupName: "Midi Tracks",
                ccs: [
                    {
                        parameterName: "MIDI Trk 1 Mute",
                        number: 112,
                    },
                    {
                        parameterName: "MIDI Trk 2 Mute",
                        number: 113,
                    },
                    {
                        parameterName: "MIDI Trk 3 Mute",
                        number: 114,
                    },
                    {
                        parameterName: "MIDI Trk 4 Mute",
                        number: 115,
                    },
                    {
                        parameterName: "MIDI Trk 5 Mute",
                        number: 116,
                    },
                    {
                        parameterName: "MIDI Trk 6 Mute",
                        number: 117,
                    },
                    {
                        parameterName: "MIDI Trk 7 Mute",
                        number: 118,
                    },
                    {
                        parameterName: "MIDI Trk 8 Mute",
                        number: 119,
                    },
                    {
                        parameterName: "MIDI Trk 1 Solo",
                        number: 120,
                    },
                    {
                        parameterName: "MIDI Trk 2 Solo",
                        number: 121,
                    },
                    {
                        parameterName: "MIDI Trk 3 Solo",
                        number: 122,
                    },
                    {
                        parameterName: "MIDI Trk 4 Solo",
                        number: 123,
                    },
                    {
                        parameterName: "MIDI Trk 5 Solo",
                        number: 124,
                    },
                    {
                        parameterName: "MIDI Trk 6 Solo",
                        number: 125,
                    },
                    {
                        parameterName: "MIDI Trk 7 Solo",
                        number: 126,
                    },
                    {
                        parameterName: "MIDI Trk 8 Solo",
                        number: 127,
                    },
                ],
            },
        ],
    },
    {
        name: "Analog Rytm",
        deviceParamters: [
            {
                groupName: "Trig",
                ccs: [
                    { parameterName: "Note", number: 3 },
                    { parameterName: "Velocity", number: 4 },
                    { parameterName: "Length", number: 5 },
                    { parameterName: "Synth Trig", number: 11 },
                    { parameterName: "Sample Trig", number: 12 },
                    { parameterName: "ENV Trig", number: 13 },
                    { parameterName: "LFO TRIG", number: 14 },
                ],
            },
            {
                groupName: "Kit",
                ccs: [
                    { parameterName: "Track Level", number: 95 },
                    { parameterName: "Track Mute (seq. mute)", number: 94 },
                    { parameterName: "Track Solo (seq. mute)", number: 93 },
                    { parameterName: "Track Machine Type", number: 15 },
                    { parameterName: "Active Scene", number: 92 },
                ],
            },
            {
                groupName: "Performance",
                ccs: [
                    {
                        parameterName: "Performance Parameter 1",
                        number: 35,
                    },
                    {
                        parameterName: "Performance Parameter 2",
                        number: 36,
                    },
                    {
                        parameterName: "Performance Parameter 3",
                        number: 37,
                    },
                    {
                        parameterName: "Performance Parameter 4",
                        number: 39,
                    },
                    {
                        parameterName: "Performance Parameter 5",
                        number: 40,
                    },
                    {
                        parameterName: "Performance Parameter 6",
                        number: 41,
                    },
                    {
                        parameterName: "Performance Parameter 7",
                        number: 42,
                    },
                    {
                        parameterName: "Performance Parameter 8",
                        number: 43,
                    },
                    {
                        parameterName: "Performance Parameter 9",
                        number: 44,
                    },
                    {
                        parameterName: "Performance Parameter 10",
                        number: 45,
                    },
                    {
                        parameterName: "Performance Parameter 11",
                        number: 46,
                    },
                    {
                        parameterName: "Performance Parameter 12",
                        number: 47,
                    },
                ],
            },
            {
                groupName: "Synth",
                ccs: [
                    {
                        parameterName: "Synth Parameter 1",
                        number: 16,
                    },
                    {
                        parameterName: "Synth Parameter 2",
                        number: 17,
                    },
                    {
                        parameterName: "Synth Parameter 3",
                        number: 18,
                    },
                    {
                        parameterName: "Synth Parameter 4",
                        number: 19,
                    },
                    {
                        parameterName: "Synth Parameter 5",
                        number: 20,
                    },
                    {
                        parameterName: "Synth Parameter 6",
                        number: 21,
                    },
                    {
                        parameterName: "Synth Parameter 7",
                        number: 22,
                    },
                    {
                        parameterName: "Synth Parameter 8",
                        number: 23,
                    },
                ],
            },
            {
                groupName: "Sample",
                ccs: [
                    {
                        parameterName: "Sample Tune",
                        number: 24,
                    },
                    {
                        parameterName: "Sample Fine tune",
                        number: 25,
                    },
                    {
                        parameterName: "Sample Bit Reduction",
                        number: 26,
                    },
                    {
                        parameterName: "Sample Slot",
                        number: 27,
                    },
                    {
                        parameterName: "Sample Start",
                        number: 28,
                    },
                    {
                        parameterName: "Sample End",
                        number: 29,
                    },
                    {
                        parameterName: "Sample Loop",
                        number: 30,
                    },
                    {
                        parameterName: "Sample Level",
                        number: 31,
                    },
                ],
            },
            {
                groupName: "Filter",
                ccs: [
                    {
                        parameterName: "Filter Attack Time",
                        number: 70,
                    },
                    {
                        parameterName: "Filter Decay Time",
                        number: 71,
                    },
                    {
                        parameterName: "Filter Sustain Level",
                        number: 72,
                    },
                    {
                        parameterName: "Filter Release Time",
                        number: 73,
                    },
                    {
                        parameterName: "Filter Frequency",
                        number: 74,
                    },
                    {
                        parameterName: "Filter Resonance",
                        number: 75,
                    },
                    {
                        parameterName: "Filter Mode",
                        number: 76,
                    },
                    {
                        parameterName: "Filter Env Depth",
                        number: 77,
                    },
                ],
            },
            {
                groupName: "Amp",
                ccs: [
                    {
                        parameterName: "Amp Attack Time",
                        number: 78,
                    },
                    {
                        parameterName: "Amp Hold Time",
                        number: 79,
                    },
                    {
                        parameterName: "Amp Decay Time",
                        number: 80,
                    },
                    {
                        parameterName: "Amp Overdrive",
                        number: 81,
                    },
                    {
                        parameterName: "Amp Delay Send",
                        number: 82,
                    },
                    {
                        parameterName: "Amp Reverb Send",
                        number: 83,
                    },
                    {
                        parameterName: "Amp Pan",
                        number: 10,
                    },
                    {
                        parameterName: "Amp Volume",
                        number: 7,
                    },
                ],
            },
            {
                groupName: "LFO",
                ccs: [
                    {
                        parameterName: "LFO Speed",
                        number: 102,
                    },
                    {
                        parameterName: "LFO Multiplier",
                        number: 103,
                    },
                    {
                        parameterName: "LFO Fade In/Out",
                        number: 104,
                    },
                    {
                        parameterName: "LFO Destination",
                        number: 105,
                    },
                    {
                        parameterName: "LFO Waveform",
                        number: 106,
                    },
                    {
                        parameterName: "LFO Start Phase",
                        number: 107,
                    },
                    {
                        parameterName: "LFO Trig Mode",
                        number: 108,
                    },
                    {
                        parameterName: "LFO Depth",
                        number: 109,
                    },
                ],
            },
            {
                groupName: "Delay",
                ccs: [
                    {
                        parameterName: "Delay Time",
                        number: 16,
                    },
                    {
                        parameterName: "Delay Pingpong",
                        number: 17,
                    },
                    {
                        parameterName: "Delay Stereo Width",
                        number: 18,
                    },
                    {
                        parameterName: "Delay Feedback",
                        number: 19,
                    },
                    {
                        parameterName: "Delay Highpass Filter",
                        number: 20,
                    },
                    {
                        parameterName: "Delay Lowpass Filter",
                        number: 21,
                    },
                    {
                        parameterName: "Delay Reverb Send",
                        number: 22,
                    },
                    {
                        parameterName: "Delay Mix Volume",
                        number: 23,
                    },
                ],
            },
            {
                groupName: "Reverb",
                ccs: [
                    {
                        parameterName: "Reverb Predelay",
                        number: 24,
                    },
                    {
                        parameterName: "Reverb Decay Time",
                        number: 25,
                    },
                    {
                        parameterName: "Reverb Shelving Freq",
                        number: 26,
                    },
                    {
                        parameterName: "Reverb Shelving Gain",
                        number: 27,
                    },
                    {
                        parameterName: "Reverb Highpass Filter",
                        number: 28,
                    },
                    {
                        parameterName: "Reverb Lowpass Filter",
                        number: 29,
                    },
                    {
                        parameterName: "Reverb Mix Volume",
                        number: 31,
                    },
                ],
            },
            {
                groupName: "Distortion",
                ccs: [
                    {
                        parameterName: "Dist Amount",
                        number: 70,
                    },
                    {
                        parameterName: "Dist Symmetry",
                        number: 71,
                    },
                    {
                        parameterName: "Delay Overdrive",
                        number: 72,
                    },
                    {
                        parameterName: "Delay Dist/Comp Routing (pre/post)",
                        number: 76,
                    },
                    {
                        parameterName: "Reverb Dist/Comp Routing (pre/post)",
                        number: 77,
                    },
                ],
            },
            {
                groupName: "Compressor",
                ccs: [
                    {
                        parameterName: "Compressor Threshold",
                        number: 78,
                    },
                    {
                        parameterName: "Compressor Attack Time",
                        number: 79,
                    },
                    {
                        parameterName: "Compressor Release Time",
                        number: 80,
                    },
                    {
                        parameterName: "Compressor Makeup Gain",
                        number: 81,
                    },
                    {
                        parameterName: "Compressor Ratio",
                        number: 82,
                    },
                    {
                        parameterName: "Compressor Sidechain EQ",
                        number: 83,
                    },
                    {
                        parameterName: "Compressor Dry/Wet Mix",
                        number: 84,
                    },
                    {
                        parameterName: "Compressor Output Volume",
                        number: 85,
                    },
                ],
            },
        ],
    },
] satisfies MidiDevice[];

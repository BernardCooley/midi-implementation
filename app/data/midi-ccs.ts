import { CC, MidiDevice } from "../types";

export const midiDevices = [
    {
        name: "Octatrack",
        deviceParamters: [
            {
                groupName: "Track",
                ccs: [
                    {
                        parameterName: "Level",
                        number: 7,
                    },
                    { parameterName: "Balance", number: 8 },
                    { parameterName: "Level", number: 46 },
                    { parameterName: "Cue level", number: 47 },
                    { parameterName: "Crossfader", number: 48 },
                    {
                        parameterName: "Mute",
                        number: 49,
                    },
                    {
                        parameterName: "Solo",
                        number: 50,
                    },
                    {
                        parameterName: "Cue",
                        number: 51,
                    },
                    {
                        parameterName: "Arm",
                        number: 52,
                    },
                ],
            },
            {
                groupName: "Playback page",
                ccs: [
                    { parameterName: "Parameter #1", number: 16 },
                    { parameterName: "Parameter #2", number: 17 },
                    { parameterName: "Parameter #3", number: 18 },
                    { parameterName: "Parameter #4", number: 19 },
                    { parameterName: "Parameter #5", number: 20 },
                    { parameterName: "Parameter #6", number: 21 },
                ],
            },
            {
                groupName: "Amp page",
                ccs: [
                    { parameterName: "Parameter #1 (Attack)", number: 22 },
                    { parameterName: "Parameter #2 (Hold)", number: 23 },
                    { parameterName: "Parameter #3 (Release)", number: 24 },
                    { parameterName: "Parameter #4 (Volume)", number: 25 },
                    { parameterName: "Parameter #5 (Balance)", number: 26 },
                    { parameterName: "Parameter #6 (N/A)", number: 27 },
                ],
            },
            {
                groupName: "LFO page",
                ccs: [
                    { parameterName: "Parameter #1 (Speed 1)", number: 28 },
                    { parameterName: "Parameter #2 (Speed 2)", number: 29 },
                    { parameterName: "Parameter #3 (Speed 3)", number: 30 },
                    { parameterName: "Parameter #4 (Depth 1)", number: 31 },
                    { parameterName: "Parameter #5 (Depth 2)", number: 32 },
                    { parameterName: "Parameter #6 (Depth 3)", number: 33 },
                ],
            },
            {
                groupName: "FX1 page",
                ccs: [
                    { parameterName: "Parameter #1", number: 34 },
                    { parameterName: "Parameter #2", number: 35 },
                    { parameterName: "Parameter #3", number: 36 },
                    { parameterName: "Parameter #4", number: 37 },
                    { parameterName: "Parameter #5", number: 38 },
                    { parameterName: "Parameter #6", number: 39 },
                ],
            },
            {
                groupName: "FX2 page",
                ccs: [
                    { parameterName: "Parameter #1", number: 40 },
                    { parameterName: "Parameter #2", number: 41 },
                    { parameterName: "Parameter #3", number: 42 },
                    { parameterName: "Parameter #4", number: 43 },
                    { parameterName: "Parameter #5", number: 44 },
                    { parameterName: "Parameter #6", number: 45 },
                ],
            },
            {
                groupName: "Recording",
                ccs: [
                    {
                        parameterName: "Recorder Arm",
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
                    { parameterName: "A Select", number: 55 },
                    { parameterName: "B Select", number: 56 },
                ],
            },
            {
                groupName: "Notes",
                ccs: [
                    { parameterName: "On", number: 59 },
                    { parameterName: "Off", number: 60 },
                    { parameterName: "Send request", number: 61 },
                ],
            },
            {
                groupName: "Midi Tracks",
                ccs: [
                    {
                        parameterName: "Trk 1 Mute",
                        number: 112,
                    },
                    {
                        parameterName: "Trk 2 Mute",
                        number: 113,
                    },
                    {
                        parameterName: "Trk 3 Mute",
                        number: 114,
                    },
                    {
                        parameterName: "Trk 4 Mute",
                        number: 115,
                    },
                    {
                        parameterName: "Trk 5 Mute",
                        number: 116,
                    },
                    {
                        parameterName: "Trk 6 Mute",
                        number: 117,
                    },
                    {
                        parameterName: "Trk 7 Mute",
                        number: 118,
                    },
                    {
                        parameterName: "Trk 8 Mute",
                        number: 119,
                    },
                    {
                        parameterName: "Trk 1 Solo",
                        number: 120,
                    },
                    {
                        parameterName: "Trk 2 Solo",
                        number: 121,
                    },
                    {
                        parameterName: "Trk 3 Solo",
                        number: 122,
                    },
                    {
                        parameterName: "Trk 4 Solo",
                        number: 123,
                    },
                    {
                        parameterName: "Trk 5 Solo",
                        number: 124,
                    },
                    {
                        parameterName: "Trk 6 Solo",
                        number: 125,
                    },
                    {
                        parameterName: "Trk 7 Solo",
                        number: 126,
                    },
                    {
                        parameterName: "Trk 8 Solo",
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
                        parameterName: "Parameter 1",
                        number: 35,
                    },
                    {
                        parameterName: "Parameter 2",
                        number: 36,
                    },
                    {
                        parameterName: "Parameter 3",
                        number: 37,
                    },
                    {
                        parameterName: "Parameter 4",
                        number: 39,
                    },
                    {
                        parameterName: "Parameter 5",
                        number: 40,
                    },
                    {
                        parameterName: "Parameter 6",
                        number: 41,
                    },
                    {
                        parameterName: "Parameter 7",
                        number: 42,
                    },
                    {
                        parameterName: "Parameter 8",
                        number: 43,
                    },
                    {
                        parameterName: "Parameter 9",
                        number: 44,
                    },
                    {
                        parameterName: "Parameter 10",
                        number: 45,
                    },
                    {
                        parameterName: "Parameter 11",
                        number: 46,
                    },
                    {
                        parameterName: "Parameter 12",
                        number: 47,
                    },
                ],
            },
            {
                groupName: "Synth",
                ccs: [
                    {
                        parameterName: "Parameter 1",
                        number: 16,
                    },
                    {
                        parameterName: "Parameter 2",
                        number: 17,
                    },
                    {
                        parameterName: "Parameter 3",
                        number: 18,
                    },
                    {
                        parameterName: "Parameter 4",
                        number: 19,
                    },
                    {
                        parameterName: "Parameter 5",
                        number: 20,
                    },
                    {
                        parameterName: "Parameter 6",
                        number: 21,
                    },
                    {
                        parameterName: "Parameter 7",
                        number: 22,
                    },
                    {
                        parameterName: "Parameter 8",
                        number: 23,
                    },
                ],
            },
            {
                groupName: "Sample",
                ccs: [
                    {
                        parameterName: "Tune",
                        number: 24,
                    },
                    {
                        parameterName: "Fine tune",
                        number: 25,
                    },
                    {
                        parameterName: "Bit Reduction",
                        number: 26,
                    },
                    {
                        parameterName: "Slot",
                        number: 27,
                    },
                    {
                        parameterName: "Start",
                        number: 28,
                    },
                    {
                        parameterName: "End",
                        number: 29,
                    },
                    {
                        parameterName: "Loop",
                        number: 30,
                    },
                    {
                        parameterName: "Level",
                        number: 31,
                    },
                ],
            },
            {
                groupName: "Filter",
                ccs: [
                    {
                        parameterName: "Attack Time",
                        number: 70,
                    },
                    {
                        parameterName: "Decay Time",
                        number: 71,
                    },
                    {
                        parameterName: "Sustain Level",
                        number: 72,
                    },
                    {
                        parameterName: "Release Time",
                        number: 73,
                    },
                    {
                        parameterName: "Frequency",
                        number: 74,
                    },
                    {
                        parameterName: "Resonance",
                        number: 75,
                    },
                    {
                        parameterName: "Mode",
                        number: 76,
                    },
                    {
                        parameterName: "Env Depth",
                        number: 77,
                    },
                ],
            },
            {
                groupName: "Amp",
                ccs: [
                    {
                        parameterName: "Attack Time",
                        number: 78,
                    },
                    {
                        parameterName: "Hold Time",
                        number: 79,
                    },
                    {
                        parameterName: "Decay Time",
                        number: 80,
                    },
                    {
                        parameterName: "Overdrive",
                        number: 81,
                    },
                    {
                        parameterName: "Delay Send",
                        number: 82,
                    },
                    {
                        parameterName: "Reverb Send",
                        number: 83,
                    },
                    {
                        parameterName: "Pan",
                        number: 10,
                    },
                    {
                        parameterName: "Volume",
                        number: 7,
                    },
                ],
            },
            {
                groupName: "LFO",
                ccs: [
                    {
                        parameterName: "Speed",
                        number: 102,
                    },
                    {
                        parameterName: "Multiplier",
                        number: 103,
                    },
                    {
                        parameterName: "Fade In/Out",
                        number: 104,
                    },
                    {
                        parameterName: "Destination",
                        number: 105,
                    },
                    {
                        parameterName: "Waveform",
                        number: 106,
                    },
                    {
                        parameterName: "Start Phase",
                        number: 107,
                    },
                    {
                        parameterName: "Trig Mode",
                        number: 108,
                    },
                    {
                        parameterName: "Depth",
                        number: 109,
                    },
                ],
            },
            {
                groupName: "Delay",
                ccs: [
                    {
                        parameterName: "Time",
                        number: 16,
                    },
                    {
                        parameterName: "Pingpong",
                        number: 17,
                    },
                    {
                        parameterName: "Stereo Width",
                        number: 18,
                    },
                    {
                        parameterName: "Feedback",
                        number: 19,
                    },
                    {
                        parameterName: "Highpass Filter",
                        number: 20,
                    },
                    {
                        parameterName: "Lowpass Filter",
                        number: 21,
                    },
                    {
                        parameterName: "Reverb Send",
                        number: 22,
                    },
                    {
                        parameterName: "Mix Volume",
                        number: 23,
                    },
                ],
            },
            {
                groupName: "Reverb",
                ccs: [
                    {
                        parameterName: "Predelay",
                        number: 24,
                    },
                    {
                        parameterName: "Decay Time",
                        number: 25,
                    },
                    {
                        parameterName: "Shelving Freq",
                        number: 26,
                    },
                    {
                        parameterName: "Shelving Gain",
                        number: 27,
                    },
                    {
                        parameterName: "Highpass Filter",
                        number: 28,
                    },
                    {
                        parameterName: "Lowpass Filter",
                        number: 29,
                    },
                    {
                        parameterName: "Mix Volume",
                        number: 31,
                    },
                ],
            },
            {
                groupName: "Distortion",
                ccs: [
                    {
                        parameterName: "Amount",
                        number: 70,
                    },
                    {
                        parameterName: "Symmetry",
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
                        parameterName: "Threshold",
                        number: 78,
                    },
                    {
                        parameterName: "Attack Time",
                        number: 79,
                    },
                    {
                        parameterName: "Release Time",
                        number: 80,
                    },
                    {
                        parameterName: "Makeup Gain",
                        number: 81,
                    },
                    {
                        parameterName: "Ratio",
                        number: 82,
                    },
                    {
                        parameterName: "Sidechain EQ",
                        number: 83,
                    },
                    {
                        parameterName: "Dry/Wet Mix",
                        number: 84,
                    },
                    {
                        parameterName: "Output Volume",
                        number: 85,
                    },
                ],
            },
        ],
    },
    {
        name: "Analog Heat",
        deviceParamters: [
            {
                groupName: "Circuit",
                ccs: [
                    {
                        parameterName: "Circuit Select",
                        number: 70,
                    },
                    { parameterName: "Drive", number: 12 },
                    {
                        parameterName: "Wet Level",
                        number: 11,
                    },
                    {
                        parameterName: "Dry/wet Mix",
                        number: 8,
                    },
                    {
                        parameterName: "Preset Volume",
                        number: 7,
                    },
                ],
            },
            {
                groupName: "EQ",
                ccs: [
                    { parameterName: "Low", number: 9 },
                    {
                        parameterName: "High",
                        number: 10,
                    },
                ],
            },
            {
                groupName: "Filter",
                ccs: [
                    {
                        parameterName: "Mode",
                        number: 80,
                    },
                    {
                        parameterName: "Frequency",
                        number: 74,
                    },
                    {
                        parameterName: "Frequency Pan",
                        number: 79,
                    },
                    {
                        parameterName: "Resonance",
                        number: 71,
                    },
                    {
                        parameterName: "Dirt",
                        number: 13,
                    },
                    {
                        parameterName: "ENV to Filter",
                        number: 14,
                    },
                    {
                        parameterName: "LFO to Filter",
                        number: 15,
                    },
                ],
            },
            {
                groupName: "Envelope",
                ccs: [
                    {
                        parameterName: "Threshold",
                        number: 16,
                    },
                    {
                        parameterName: "Attack",
                        number: 73,
                    },
                    {
                        parameterName: "Release",
                        number: 72,
                    },
                    {
                        parameterName: "Base",
                        number: 17,
                    },
                    {
                        parameterName: "Width",
                        number: 18,
                    },
                    {
                        parameterName: "Mode",
                        number: 19,
                    },
                    {
                        parameterName: "Destination",
                        number: 75,
                    },
                    {
                        parameterName: "Depth",
                        number: 20,
                    },
                    {
                        parameterName: "Destination 2",
                        number: 76,
                    },
                    {
                        parameterName: "Depth 2",
                        number: 21,
                    },
                ],
            },
            {
                groupName: "LFO",
                ccs: [
                    {
                        parameterName: "Waveform",
                        number: 83,
                    },
                    {
                        parameterName: "Speed",
                        number: 22,
                    },
                    {
                        parameterName: "Multiplier",
                        number: 23,
                    },
                    {
                        parameterName: "Fade",
                        number: 24,
                    },
                    {
                        parameterName: "Mode",
                        number: 25,
                    },
                    {
                        parameterName: "Start Phase",
                        number: 26,
                    },
                    {
                        parameterName: "Destination",
                        number: 77,
                    },
                    {
                        parameterName: "Depth",
                        number: 27,
                    },
                    {
                        parameterName: "Destination 2",
                        number: 78,
                    },
                    {
                        parameterName: "Depth 2",
                        number: 28,
                    },
                ],
            },
            {
                groupName: "CV/Expr",
                ccs: [
                    {
                        parameterName: "CV A Destination",
                        number: 85,
                    },
                    {
                        parameterName: "CV A Depth",
                        number: 86,
                    },
                    {
                        parameterName: "Expr. A Destination",
                        number: 87,
                    },
                    {
                        parameterName: "Expr. A Depth",
                        number: 88,
                    },
                    {
                        parameterName: "CV B Destination",
                        number: 89,
                    },
                    {
                        parameterName: "CV B Depth",
                        number: 90,
                    },
                    {
                        parameterName: "Expr. B Destination",
                        number: 91,
                    },
                    {
                        parameterName: "Expr. B Depth",
                        number: 92,
                    },
                ],
            },
        ],
    },
    {
        name: "Walrus M1",
        deviceParamters: [
            {
                groupName: "All",
                ccs: [
                    { parameterName: "Rate", number: 3 },
                    { parameterName: "Depth", number: 9 },
                    { parameterName: "Lo-Fi", number: 14 },
                    { parameterName: "Shape", number: 15 },
                    { parameterName: "Division", number: 16 },
                    { parameterName: "Type", number: 17 },
                    { parameterName: "Prog", number: 18 },
                    { parameterName: "Tone", number: 19 },
                    { parameterName: "Sym", number: 20 },
                    { parameterName: "X", number: 21 },
                    { parameterName: "Env", number: 22 },
                    { parameterName: "Drive", number: 23 },
                    { parameterName: "Space", number: 24 },
                    { parameterName: "Age", number: 25 },
                    { parameterName: "Noise", number: 26 },
                    { parameterName: "Warble", number: 27 },
                    { parameterName: "Bypass", number: 31 },
                    { parameterName: "Switch", number: 31 },
                    { parameterName: "Tap", number: 85 },
                    { parameterName: "Rotary Speed", number: 86 },
                    { parameterName: "Skip", number: 86 },
                    { parameterName: "Rotary Break", number: 87 },
                    { parameterName: "Output Volume", number: 88 },
                    { parameterName: "MIDI Clock Ignore", number: 89 },
                    { parameterName: "Tweak Switch", number: 90 },
                    { parameterName: "Bank Switch", number: 102 },
                    { parameterName: "Tune Switch", number: 103 },
                ],
            },
        ],
    },
    {
        name: "Microcosm",
        deviceParamters: [
            {
                groupName: "Delay",
                ccs: [
                    { parameterName: "Subdiv", number: 5 },
                    { parameterName: "Activity", number: 6 },
                    { parameterName: "Shape", number: 7 },

                    { parameterName: "Mix", number: 9 },
                    { parameterName: "Time", number: 10 },
                    { parameterName: "Repeats", number: 11 },
                    { parameterName: "Loop Level", number: 13 },

                    { parameterName: "Effect Volume", number: 16 },

                    { parameterName: "Reverse Effect", number: 47 },
                ],
            },
            {
                groupName: "Reverb",
                ccs: [
                    { parameterName: "Space", number: 12 },

                    { parameterName: "Reverb Time", number: 20 },
                ],
            },
            {
                groupName: "Filter",
                ccs: [
                    { parameterName: "Filter", number: 8 },
                    { parameterName: "Mod Freq.", number: 14 },
                    { parameterName: "Resonance", number: 15 },
                    { parameterName: "Mod Depth", number: 19 },
                ],
            },
            {
                groupName: "Looper",
                ccs: [
                    { parameterName: "Playback Speed", number: 17 },
                    { parameterName: "Playback (Stepped)", number: 18 },
                    { parameterName: "Fade Time", number: 21 },
                    { parameterName: "On / Off", number: 22 },
                    { parameterName: "Playback Dir.", number: 23 },
                    { parameterName: "Routing", number: 24 },
                    { parameterName: "Only", number: 25 },
                    { parameterName: "Burst", number: 26 },
                    { parameterName: "Quantized", number: 27 },
                    { parameterName: "Record", number: 28 },
                    { parameterName: "Play", number: 29 },
                    { parameterName: "Overdub", number: 30 },
                    { parameterName: "Stop", number: 31 },
                    { parameterName: "Erase", number: 34 },
                    { parameterName: "Undo", number: 35 },
                ],
            },
            {
                groupName: "General",
                ccs: [
                    { parameterName: "Copy Preset", number: 45 },
                    { parameterName: "Save Preset", number: 46 },
                    { parameterName: "Hold Sampler", number: 48 },
                    { parameterName: "TAP Tempo", number: 93 },
                    { parameterName: "Bypass", number: 102 },
                ],
            },
        ],
    },
    {
        name: "Swarm",
        deviceParamters: [
            {
                groupName: "General",
                ccs: [
                    { parameterName: "LFO speed", number: 1 },
                    { parameterName: "Spread", number: 2 },
                    { parameterName: "Fold", number: 3 },
                    { parameterName: "Perc", number: 4 },
                    { parameterName: "Attack", number: 5 },
                    { parameterName: "Decay", number: 6 },
                    { parameterName: "Volume", number: 7 },
                ],
            },
        ],
    },
] satisfies MidiDevice[];

export const midiCCs = [
    {
        parameterName: "Level",
        number: 7,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Balance",
        number: 8,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Level",
        number: 46,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Cue level",
        number: 47,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Crossfader",
        number: 48,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Mute",
        number: 49,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Solo",
        number: 50,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Cue",
        number: 51,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Arm",
        number: 52,
        deviceName: "Octatrack",
        groupName: "Track",
    },
    {
        parameterName: "Parameter #1",
        number: 16,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #2",
        number: 17,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #3",
        number: 18,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #4",
        number: 19,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #5",
        number: 20,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #6",
        number: 21,
        deviceName: "Octatrack",
        groupName: "Playback page",
    },
    {
        parameterName: "Parameter #1 (Attack)",
        number: 22,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #2 (Hold)",
        number: 23,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #3 (Release)",
        number: 24,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #4 (Volume)",
        number: 25,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #5 (Balance)",
        number: 26,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #6 (N/A)",
        number: 27,
        deviceName: "Octatrack",
        groupName: "Amp page",
    },
    {
        parameterName: "Parameter #1 (Speed 1)",
        number: 28,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #2 (Speed 2)",
        number: 29,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #3 (Speed 3)",
        number: 30,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #4 (Depth 1)",
        number: 31,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #5 (Depth 2)",
        number: 32,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #6 (Depth 3)",
        number: 33,
        deviceName: "Octatrack",
        groupName: "LFO page",
    },
    {
        parameterName: "Parameter #1",
        number: 34,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #2",
        number: 35,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #3",
        number: 36,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #4",
        number: 37,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #5",
        number: 38,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #6",
        number: 39,
        deviceName: "Octatrack",
        groupName: "FX1 page",
    },
    {
        parameterName: "Parameter #1",
        number: 40,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Parameter #2",
        number: 41,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Parameter #3",
        number: 42,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Parameter #4",
        number: 43,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Parameter #5",
        number: 44,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Parameter #6",
        number: 45,
        deviceName: "Octatrack",
        groupName: "FX2 page",
    },
    {
        parameterName: "Recorder Arm",
        number: 53,
        deviceName: "Octatrack",
        groupName: "Recording",
    },
    {
        parameterName: "All Arm",
        number: 54,
        deviceName: "Octatrack",
        groupName: "Recording",
    },
    {
        parameterName: "Pickup SRC AB level",
        number: 57,
        deviceName: "Octatrack",
        groupName: "Recording",
    },
    {
        parameterName: "Pickup SRC CD level",
        number: 58,
        deviceName: "Octatrack",
        groupName: "Recording",
    },
    {
        parameterName: "A Select",
        number: 55,
        deviceName: "Octatrack",
        groupName: "Scenes",
    },
    {
        parameterName: "B Select",
        number: 56,
        deviceName: "Octatrack",
        groupName: "Scenes",
    },
    {
        parameterName: "On",
        number: 59,
        deviceName: "Octatrack",
        groupName: "Notes",
    },
    {
        parameterName: "Off",
        number: 60,
        deviceName: "Octatrack",
        groupName: "Notes",
    },
    {
        parameterName: "Send request",
        number: 61,
        deviceName: "Octatrack",
        groupName: "Notes",
    },
    {
        parameterName: "Trk 1 Mute",
        number: 112,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 2 Mute",
        number: 113,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 3 Mute",
        number: 114,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 4 Mute",
        number: 115,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 5 Mute",
        number: 116,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 6 Mute",
        number: 117,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 7 Mute",
        number: 118,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 8 Mute",
        number: 119,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 1 Solo",
        number: 120,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 2 Solo",
        number: 121,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 3 Solo",
        number: 122,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 4 Solo",
        number: 123,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 5 Solo",
        number: 124,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 6 Solo",
        number: 125,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 7 Solo",
        number: 126,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Trk 8 Solo",
        number: 127,
        deviceName: "Octatrack",
        groupName: "Midi Tracks",
    },
    {
        parameterName: "Note",
        number: 3,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "Velocity",
        number: 4,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "Length",
        number: 5,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "Synth Trig",
        number: 11,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "Sample Trig",
        number: 12,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "ENV Trig",
        number: 13,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "LFO TRIG",
        number: 14,
        deviceName: "Analog Rytm",
        groupName: "Trig",
    },
    {
        parameterName: "Track Level",
        number: 95,
        deviceName: "Analog Rytm",
        groupName: "Kit",
    },
    {
        parameterName: "Track Mute (seq. mute)",
        number: 94,
        deviceName: "Analog Rytm",
        groupName: "Kit",
    },
    {
        parameterName: "Track Solo (seq. mute)",
        number: 93,
        deviceName: "Analog Rytm",
        groupName: "Kit",
    },
    {
        parameterName: "Track Machine Type",
        number: 15,
        deviceName: "Analog Rytm",
        groupName: "Kit",
    },
    {
        parameterName: "Active Scene",
        number: 92,
        deviceName: "Analog Rytm",
        groupName: "Kit",
    },
    {
        parameterName: "Parameter 1",
        number: 35,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 2",
        number: 36,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 3",
        number: 37,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 4",
        number: 39,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 5",
        number: 40,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 6",
        number: 41,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 7",
        number: 42,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 8",
        number: 43,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 9",
        number: 44,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 10",
        number: 45,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 11",
        number: 46,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 12",
        number: 47,
        deviceName: "Analog Rytm",
        groupName: "Performance",
    },
    {
        parameterName: "Parameter 1",
        number: 16,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 2",
        number: 17,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 3",
        number: 18,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 4",
        number: 19,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 5",
        number: 20,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 6",
        number: 21,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 7",
        number: 22,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Parameter 8",
        number: 23,
        deviceName: "Analog Rytm",
        groupName: "Synth",
    },
    {
        parameterName: "Tune",
        number: 24,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Fine tune",
        number: 25,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Bit Reduction",
        number: 26,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Slot",
        number: 27,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Start",
        number: 28,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "End",
        number: 29,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Loop",
        number: 30,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Level",
        number: 31,
        deviceName: "Analog Rytm",
        groupName: "Sample",
    },
    {
        parameterName: "Attack Time",
        number: 70,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Decay Time",
        number: 71,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Sustain Level",
        number: 72,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Release Time",
        number: 73,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Frequency",
        number: 74,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Resonance",
        number: 75,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Mode",
        number: 76,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Env Depth",
        number: 77,
        deviceName: "Analog Rytm",
        groupName: "Filter",
    },
    {
        parameterName: "Attack Time",
        number: 78,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Hold Time",
        number: 79,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Decay Time",
        number: 80,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Overdrive",
        number: 81,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Delay Send",
        number: 82,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Reverb Send",
        number: 83,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Pan",
        number: 10,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Volume",
        number: 7,
        deviceName: "Analog Rytm",
        groupName: "Amp",
    },
    {
        parameterName: "Speed",
        number: 102,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Multiplier",
        number: 103,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Fade In/Out",
        number: 104,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Destination",
        number: 105,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Waveform",
        number: 106,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Start Phase",
        number: 107,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Trig Mode",
        number: 108,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Depth",
        number: 109,
        deviceName: "Analog Rytm",
        groupName: "LFO",
    },
    {
        parameterName: "Time",
        number: 16,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Pingpong",
        number: 17,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Stereo Width",
        number: 18,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Feedback",
        number: 19,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Highpass Filter",
        number: 20,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Lowpass Filter",
        number: 21,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Reverb Send",
        number: 22,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Mix Volume",
        number: 23,
        deviceName: "Analog Rytm",
        groupName: "Delay",
    },
    {
        parameterName: "Predelay",
        number: 24,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Decay Time",
        number: 25,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Shelving Freq",
        number: 26,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Shelving Gain",
        number: 27,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Highpass Filter",
        number: 28,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Lowpass Filter",
        number: 29,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Mix Volume",
        number: 31,
        deviceName: "Analog Rytm",
        groupName: "Reverb",
    },
    {
        parameterName: "Amount",
        number: 70,
        deviceName: "Analog Rytm",
        groupName: "Distortion",
    },
    {
        parameterName: "Symmetry",
        number: 71,
        deviceName: "Analog Rytm",
        groupName: "Distortion",
    },
    {
        parameterName: "Delay Overdrive",
        number: 72,
        deviceName: "Analog Rytm",
        groupName: "Distortion",
    },
    {
        parameterName: "Delay Dist/Comp Routing (pre/post)",
        number: 76,
        deviceName: "Analog Rytm",
        groupName: "Distortion",
    },
    {
        parameterName: "Reverb Dist/Comp Routing (pre/post)",
        number: 77,
        deviceName: "Analog Rytm",
        groupName: "Distortion",
    },
    {
        parameterName: "Threshold",
        number: 78,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Attack Time",
        number: 79,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Release Time",
        number: 80,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Makeup Gain",
        number: 81,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Ratio",
        number: 82,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Sidechain EQ",
        number: 83,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Dry/Wet Mix",
        number: 84,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Output Volume",
        number: 85,
        deviceName: "Analog Rytm",
        groupName: "Compressor",
    },
    {
        parameterName: "Circuit Select",
        number: 70,
        deviceName: "Analog Heat",
        groupName: "Circuit",
    },
    {
        parameterName: "Drive",
        number: 12,
        deviceName: "Analog Heat",
        groupName: "Circuit",
    },
    {
        parameterName: "Wet Level",
        number: 11,
        deviceName: "Analog Heat",
        groupName: "Circuit",
    },
    {
        parameterName: "Dry/wet Mix",
        number: 8,
        deviceName: "Analog Heat",
        groupName: "Circuit",
    },
    {
        parameterName: "Preset Volume",
        number: 7,
        deviceName: "Analog Heat",
        groupName: "Circuit",
    },
    {
        parameterName: "Low",
        number: 9,
        deviceName: "Analog Heat",
        groupName: "EQ",
    },
    {
        parameterName: "High",
        number: 10,
        deviceName: "Analog Heat",
        groupName: "EQ",
    },
    {
        parameterName: "Mode",
        number: 80,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "Frequency",
        number: 74,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "Frequency Pan",
        number: 79,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "Resonance",
        number: 71,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "Dirt",
        number: 13,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "ENV to Filter",
        number: 14,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "LFO to Filter",
        number: 15,
        deviceName: "Analog Heat",
        groupName: "Filter",
    },
    {
        parameterName: "Threshold",
        number: 16,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Attack",
        number: 73,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Release",
        number: 72,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Base",
        number: 17,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Width",
        number: 18,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Mode",
        number: 19,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Destination",
        number: 75,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Depth",
        number: 20,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Destination 2",
        number: 76,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Depth 2",
        number: 21,
        deviceName: "Analog Heat",
        groupName: "Envelope",
    },
    {
        parameterName: "Waveform",
        number: 83,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Speed",
        number: 22,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Multiplier",
        number: 23,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Fade",
        number: 24,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Mode",
        number: 25,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Start Phase",
        number: 26,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Destination",
        number: 77,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Depth",
        number: 27,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Destination 2",
        number: 78,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "Depth 2",
        number: 28,
        deviceName: "Analog Heat",
        groupName: "LFO",
    },
    {
        parameterName: "CV A Destination",
        number: 85,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "CV A Depth",
        number: 86,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "Expr. A Destination",
        number: 87,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "Expr. A Depth",
        number: 88,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "CV B Destination",
        number: 89,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "CV B Depth",
        number: 90,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "Expr. B Destination",
        number: 91,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "Expr. B Depth",
        number: 92,
        deviceName: "Analog Heat",
        groupName: "CV/Expr",
    },
    {
        parameterName: "Rate",
        number: 3,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Depth",
        number: 9,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Lo-Fi",
        number: 14,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Shape",
        number: 15,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Division",
        number: 16,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Type",
        number: 17,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Prog",
        number: 18,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Tone",
        number: 19,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Sym",
        number: 20,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "X",
        number: 21,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Env",
        number: 22,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Drive",
        number: 23,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Space",
        number: 24,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Age",
        number: 25,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Noise",
        number: 26,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Warble",
        number: 27,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Bypass",
        number: 31,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Switch",
        number: 31,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Tap",
        number: 85,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Rotary Speed",
        number: 86,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Skip",
        number: 86,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Rotary Break",
        number: 87,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Output Volume",
        number: 88,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "MIDI Clock Ignore",
        number: 89,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Tweak Switch",
        number: 90,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Bank Switch",
        number: 102,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Tune Switch",
        number: 103,
        deviceName: "Walrus M1",
        groupName: "All",
    },
    {
        parameterName: "Subdiv",
        number: 5,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Activity",
        number: 6,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Shape",
        number: 7,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Mix",
        number: 9,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Time",
        number: 10,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Repeats",
        number: 11,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Loop Level",
        number: 13,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Effect Volume",
        number: 16,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Reverse Effect",
        number: 47,
        deviceName: "Microcosm",
        groupName: "Delay",
    },
    {
        parameterName: "Space",
        number: 12,
        deviceName: "Microcosm",
        groupName: "Reverb",
    },
    {
        parameterName: "Reverb Time",
        number: 20,
        deviceName: "Microcosm",
        groupName: "Reverb",
    },
    {
        parameterName: "Filter",
        number: 8,
        deviceName: "Microcosm",
        groupName: "Filter",
    },
    {
        parameterName: "Mod Freq.",
        number: 14,
        deviceName: "Microcosm",
        groupName: "Filter",
    },
    {
        parameterName: "Resonance",
        number: 15,
        deviceName: "Microcosm",
        groupName: "Filter",
    },
    {
        parameterName: "Mod Depth",
        number: 19,
        deviceName: "Microcosm",
        groupName: "Filter",
    },
    {
        parameterName: "Playback Speed",
        number: 17,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Playback (Stepped)",
        number: 18,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Fade Time",
        number: 21,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "On / Off",
        number: 22,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Playback Dir.",
        number: 23,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Routing",
        number: 24,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Only",
        number: 25,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Burst",
        number: 26,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Quantized",
        number: 27,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Record",
        number: 28,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Play",
        number: 29,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Overdub",
        number: 30,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Stop",
        number: 31,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Erase",
        number: 34,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Undo",
        number: 35,
        deviceName: "Microcosm",
        groupName: "Looper",
    },
    {
        parameterName: "Copy Preset",
        number: 45,
        deviceName: "Microcosm",
        groupName: "General",
    },
    {
        parameterName: "Save Preset",
        number: 46,
        deviceName: "Microcosm",
        groupName: "General",
    },
    {
        parameterName: "Hold Sampler",
        number: 48,
        deviceName: "Microcosm",
        groupName: "General",
    },
    {
        parameterName: "TAP Tempo",
        number: 93,
        deviceName: "Microcosm",
        groupName: "General",
    },
    {
        parameterName: "Bypass",
        number: 102,
        deviceName: "Microcosm",
        groupName: "General",
    },
    {
        parameterName: "LFO speed",
        number: 1,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Spread",
        number: 2,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Fold",
        number: 3,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Perc",
        number: 4,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Attack",
        number: 5,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Decay",
        number: 6,
        deviceName: "Swarm",
        groupName: "General",
    },
    {
        parameterName: "Volume",
        number: 7,
        deviceName: "Swarm",
        groupName: "General",
    },
] satisfies CC[];

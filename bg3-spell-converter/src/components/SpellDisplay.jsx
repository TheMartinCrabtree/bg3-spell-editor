import React, { useState } from "react";

const example = {
    "casting_time": "1 action",
    "classes": [
        "sorcerer",
        "wizard"
    ],
    "components": {
        "material": false,
        "raw": "V, S",
        "somatic": true,
        "verbal": true
    },
    "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\n\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    "duration": "Instantaneous",
    "level": "cantrip",
    "name": "Acid Splash",
    "range": "60 feet",
    "ritual": false,
    "school": "conjuration",
    "tags": [
        "sorcerer",
        "wizard",
        "cantrip"
    ],
    "type": "Conjuration cantrip"
  }

const SpellDisplay=(props)=>{
    const {name, casting_time, classes, description, duration, level, range, ritual, school, tags, type} = props.spellData;
    return(
        <div>name: {name}</div>
    );
};

export default SpellDisplay;
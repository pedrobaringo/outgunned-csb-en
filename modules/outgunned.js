Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"outgunnedDice",name:"Outgunned Dice"},"preferred");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'A',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedDice"
    });
	dice3d.addSystem({id:"outgunnedWoKDice",name:"Outgunned WoK Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedWoKDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'C',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedWoKDice"
    });
	dice3d.addSystem({id:"outgunnedAdvDice",name:"Outgunned Adventure Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedAdvDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'D',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedAdvDice"
    });
	dice3d.addSystem({id:"outgunnedStarDice",name:"Outgunned Star Raiders Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedStarDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'N',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedStarDice"
    });
	dice3d.addSystem({id:"outgunnedRisDraDice",name:"Outgunned Rising Dragon Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedRisDraDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'M',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedRisDraDice"
    });
	dice3d.addSystem({id:"outgunnedCloDagDice",name:"Outgunned Cloak and Dagger Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedCloDagDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'F',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedCloDagDice"
    });
	dice3d.addSystem({id:"outgunnedPowDice",name:"Outgunned Great Powers Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedPowDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'I',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedPowDice"
    });
	dice3d.addSystem({id:"outgunnedWeirDice",name:"Outgunned Weirder Things Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedWeirDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'O',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedWeirDice"
    });
	dice3d.addSystem({id:"outgunnedMagDice",name:"Outgunned A Kind of Magic Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedMagDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'E',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedMagDice"
    });
	dice3d.addSystem({id:"outgunnedAlienDice",name:"Outgunned Killing Aliens Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedAlienDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'J',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedAlienDice"
    });
	dice3d.addSystem({id:"outgunnedGhostDice",name:"Outgunned Ghost Hunters Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedGhostDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'H',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedGhostDice"
    });
	dice3d.addSystem({id:"outgunnedMidnDice",name:"Outgunned Midnight Wars Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedMidnDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'K',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedMidnDice"
    });
	dice3d.addSystem({id:"outgunnedNeonDice",name:"Outgunned Neon Noire Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedNeonDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'L',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedNeonDice"
    });
	dice3d.addSystem({id:"outgunnedEveryDice",name:"Outgunned Everything at Once Dice"},"default");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        '1', 
        '2', 
        '3', 
        '4',
        '5', 
        '6'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedEveryDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'G',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedEveryDice"
    });
});


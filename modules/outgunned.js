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
	dice3d.addSystem({id:"outgunnedSuperDice",name:"Outgunned Superheroes Dice"},"default");
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
      system: "outgunnedSuperDice"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'P',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedSuperDice"
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
	dice3d.addSystem({id:"outgunnedstarknights",name:"Outgunned Star Knights"},"default");
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
      system: "outgunnedstarknights"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'P',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedstarknights"
    });
	dice3d.addSystem({id:"outgunnedoldones",name:"Outgunned Old Ones"},"default");
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
      system: "outgunnedoldones"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'Q',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedoldones"
    });
	dice3d.addSystem({id:"outgunnedwildwest",name:"Outgunned Wild West"},"default");
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
      system: "outgunnedwildwest"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'R',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedwildwest"
    });
	dice3d.addSystem({id:"outgunneddarklight",name:"Outgunned Dark Light"},"default");
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
      system: "outgunneddarklight"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'S',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunneddarklight"
    });
	dice3d.addSystem({id:"outgunnedmightyswords",name:"Outgunned Mighty Swords"},"default");
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
      system: "outgunnedmightyswords"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'T',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedmightyswords"
    });
	dice3d.addSystem({id:"outgunneddistrict77",name:"Outgunned District 77"},"default");
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
      system: "outgunneddistrict77"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'U',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunneddistrict77"
    });
	dice3d.addSystem({id:"outgunneddinostorm",name:"Outgunned Dino Storm"},"default");
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
      system: "outgunneddinostorm"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'V',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunneddinostorm"
    });
	dice3d.addSystem({id:"outgunnedfuriouswasteland",name:"Outgunned Furious Wasteland"},"default");
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
      system: "outgunnedfuriouswasteland"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'W',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedfuriouswasteland"
    });
	dice3d.addSystem({id:"outgunnedarmyofevil",name:"Outgunned Army of Evil"},"default");
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
      system: "outgunnedarmyofevil"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'X',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedarmyofevil"
    });
	dice3d.addSystem({id:"outgunnedquacktales",name:"Outgunned Quack Tales"},"default");
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
      system: "outgunnedquacktales"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'Y',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedquacktales"
    });
	dice3d.addSystem({id:"outgunnedinsertcoin",name:"Outgunned Insert Coin"},"default");
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
      system: "outgunnedinsertcoin"
    });
	dice3d.addDicePreset({
      type:"dc",
      labels:[
        'Z',  
        'B'
      ],
	  font:"OutgunnedDice-Regular",
	  fontScale: 2.2,
      system: "outgunnedinsertcoin"
    });
});																				   



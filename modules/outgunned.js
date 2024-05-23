import {OGd6} from './die.js';

Hooks.once("init", async function () {
	CONFIG.Dice.terms["d"] = OGd6;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"outgunnedDice",name:"Outgunned Dice"},"preferred");
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/outgunned-csb-en/assets/Cara1.webp', 
        'modules/outgunned-csb-en/assets/Cara2.webp', 
        'modules/outgunned-csb-en/assets/Cara3.webp', 
        'modules/outgunned-csb-en/assets/Cara4.webp',
        'modules/outgunned-csb-en/assets/Cara5.webp', 
        'modules/outgunned-csb-en/assets/Cara6.webp'
      ],
      bumpMaps:[
        'modules/outgunned-csb-en/assets/Cara1_Bump.webp', 
        'modules/outgunned-csb-en/assets/Cara2_Bump.webp', 
        'modules/outgunned-csb-en/assets/Cara3_Bump.webp', 
        'modules/outgunned-csb-en/assets/Cara4_Bump.webp',
        'modules/outgunned-csb-en/assets/Cara5_Bump.webp', 
        'modules/outgunned-csb-en/assets/Cara6_Bump.webp'
      ],
	  colorset:"WhiteOutgunned",
      system: "outgunnedDice"
    });
	dice3d.addColorset({
    name: 'WhiteOutgunned',
    description: 'White',
    category: 'Outgunned Dice',
    foreground: 'white',
    background: 'white',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
});
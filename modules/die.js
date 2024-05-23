export class OGd6 extends Die {
    constructor(termData) {
        super(termData);
    }

/** @override */
    static DENOMINATION = "d";
     /** @override */
    
    getResultLabel(result) {
     if(this.faces==6) {
        return {
            "1": '<img src="modules/outgunned-csb-en/assets/Cara1_inCHAT.webp" />',
            "2": '<img src="modules/outgunned-csb-en/assets/Cara2_inCHAT.webp" />',
            "3": '<img src="modules/outgunned-csb-en/assets/Cara3_inCHAT.webp" />',
            "4": '<img src="modules/outgunned-csb-en/assets/Cara4_inCHAT.webp" />',
			"5": '<img src="modules/outgunned-csb-en/assets/Cara5_inCHAT.webp" />',			
            "6": '<img src="modules/outgunned-csb-en/assets/Cara6_inCHAT.webp" />'
        }[result.result];
        } else {
        return String(result.result);
        }
    }
    
    
};
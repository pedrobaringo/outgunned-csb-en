export class OGAd6 extends Die {
    constructor(termData) {
        super(termData);
    }

/** @override */
    static DENOMINATION = "d";
     /** @override */
    
    getResultLabel(result) {
     if(this.faces==6) {
        return {
            "1": 'a',
            "2": 'b',
            "3": 'c',
            "4": 'd',
			"5": 'e',			
            "6": 'f'
        }[result.result];
        } else {
        return String(result.result);
        }
    }
    
    
};
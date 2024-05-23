Hooks.once("init", function() {
    console.log("Initializing Outgunned module")

    game.settings.register("outgunned-csb-en", "firstTimeStart", {
        name: "Force Welcome message",
        hint: "If you check this box you will see the Welcome message the next time you enter the World.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Welcome to the Outgunned Module</h1>';
	let mensimpfirst='<p>Import the Compendiums to start using the module</p><button id='+buttonId2+' >Import the compendiums</button>';
	let mensimpact='<p>The module has been updated since you last used it. Import the compendiums to have the latest version of the actor and object Templates.</p><button id='+buttonId2+' >Import the Compendiums</button>'
	let mensrecordtut='<p>Remember: You can select a different Attribute or add bonus or penalty dice by pressing the Shift key when clicking on the Skill.</p><button id='+buttonId+' >Go to the Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("outgunned-csb-en", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("outgunned-csb-en").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("outgunned-csb-en", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Outgunned"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/outgunned-csb-en')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("outgunned-csb-en.object-templates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Object Templates")) {
							folderident=game.folders.getName("Object Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Object Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("outgunned-csb-en.actortemplates");
							let folderident2=''
							if (game.folders.getName("Actor Templates")) {
								folderident2=game.folders.getName("Actor Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
							let collection3 = game.packs.get("outgunned-csb-en.ogmacros");
							let folderident3=''
							if (game.folders.getName("Macros Outgunned")) {
								folderident3=game.folders.getName("Macros Outgunned").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros Outgunned", keepId: true});
						}, 500);
						game.user.setFlag("outgunned-csb-en", "welcomeMessage", true);
						game.user.setFlag("outgunned-csb-en", "lastVersion", game.modules.get("outgunned-csb-en").version);
					});
				}
				}, 100);
			});
			game.settings.set("outgunned-csb-en", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("outgunned-csb-en", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Outgunned"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/outgunned-csb-en')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("outgunned-csb-en.object-templates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Object Templates")) {
							folderident=game.folders.getName("Object Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Object Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("outgunned-csb-en.actortemplates");
							let folderident2=''
							if (game.folders.getName("Actor Templates")) {
								folderident2=game.folders.getName("Actor Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
							let collection3 = game.packs.get("outgunned-csb-en.ogmacros");
							let folderident3=''
							if (game.folders.getName("Macros Outgunned")) {
								folderident3=game.folders.getName("Macros Outgunned").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros Outgunned", keepId: true});
						}, 500);
						game.user.setFlag("outgunned-csb-en", "lastVersion", game.modules.get("outgunned-csb-en").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("outgunned-csb-en", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Outgunned"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/outgunned-csb-en');
				});
			}
			}, 100);
		});
		game.user.setFlag("outgunned-csb-en", "welcomeMessage", true);
		game.settings.set("outgunned-csb-en", "firstTimeStart", false);
	}
})
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		document.getElementById("btnLancer").addEventListener("click", e => {
			this.lancer();
		});
	}
	static lancer() {
		// Récupération des données du formulaire
		var joueur = document.getElementById("joueur");
		var nbDes = joueur.nbDes.valueAsNumber;
		var couleur = joueur.couleur.value;
		// Affichage
		var table = document.getElementById("table");
		while (table.firstChild) {
			table.removeChild(table.firstChild);
		}
		for (let i = 0; i < nbDes; i += 1) {
			let n = Math.floor(Math.random() * 6) + 1;
			let c = couleur;
			if (c === "a") {
				let lesCouleurs = ["r", "v", "b","j"];
				let posCouleur = Math.floor(Math.random() * lesCouleurs.length);
				c = lesCouleurs[posCouleur];
			}
			let img = table.appendChild(document.createElement("img"));
			img.src = "img/de_"+n+"_"+c+".svg";
			img.style.transform = `translate(${Math.floor(Math.random() * 10)-5}px,${Math.floor(Math.random() * 10)-5}px) rotate(${Math.floor(Math.random() * 60)-30}deg)`
		}
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();

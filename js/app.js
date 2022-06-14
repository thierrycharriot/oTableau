const app = {
    // Méthode appelée au chargement de la page
    init: function() {
       console.log('app en marche! :)')
       /**
        * Sélectionner élèment dans le DOM
        * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
        * element = document.querySelector(sélecteurs);
        */
       const inputLines = document.querySelector('#number_lines')
       /**
        * Ajouter écouteur d'évènements sur évènement sélectionné
        * https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
        * target.addEventListener(type, listener [, options]);
        */
       inputLines.addEventListener('keyup', function () {
            //console.log('glop glop')
            const valueText = document.querySelector('#text').value
            const valueLines = document.querySelector('#number_lines').value
            let contentTable = document.querySelector('.text-board')
            /**
             * Vider contenu tableau
             * https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
             * const content = element.innerHTML;
             * element.innerHTML = htmlString;
             */
            contentTable.innerHTML = ''
            console.log(valueText) // Debug OK
            console.log(valueLines) // Debug OK
    
            if(valueText != '') {
                for (let index = 0; index < valueLines; index++) {
                    contentTable.innerHTML += valueText + '<br>'
                    
                }
            }
       })
    }
}

document.addEventListener('DOMContentLoaded', app.init);

/**
 * Sélectionner élèments à écouter dans le DOM 
 * Ecouter évènement 'keyup' sur 'number_lines' 
 *  Récupérer valeur entrée 'number_lines' et 'text'
 *      IF text > 0
 *      POUR  $lines <= $number_lines
 *          Ecrire text * $number_lines 
 */
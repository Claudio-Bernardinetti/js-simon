/* Traccia:

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!

Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:

Da quante ore è composto un giorno?

Da quanti minuti è composta un'ora?

Da quanti secondi è composto un minuto?

Da quanti millisecondi è composto un secondo?

Quanti millisecondi mi separano da domani alle 9:30?

Esiste un oggetto JS in grado di gestire le date?

Esistono dei metodi per trasformare una data in millisecondi?

 */



const targetDate = new Date('2023-09-06T08:30:00'); // Set the target date and time here
const countdownElement = document.querySelector('.countdown'); // Select the element where the countdown will be displayed

const updateCountdown = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;
    
    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${days} Days - ${hours} Hours - ${minutes} Minutes - ${seconds} Seconds remaining`;
    } else {
        countdownElement.textContent = 'The time has come!';
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

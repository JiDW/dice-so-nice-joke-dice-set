Hooks.once('diceSoNiceReady', (dice3d) => {

    /**
     * Adds a new system to the dice3d system list.
     * https://gitlab.com/riccisi/foundryvtt-dice-so-nice/-/wikis/API/Customization#adding-a-custom-model-system-aka-dice-face-preset
     */
    dice3d.addSystem({id: "customsystem", name: "My Custom System"}, "default");

    /**
     * Adds a new dice preset to the dice3d system.
     * https://gitlab.com/riccisi/foundryvtt-dice-so-nice/-/wikis/API/Customization#adding-a-custom-dicepreset-dice-faces
     */
    dice3d.addDicePreset({
        type: "d20",
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        //labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'images/nat20.webp'],
        //labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'F'],
        font: "FoundryVTT",
        system: "customsystem"
    });
});
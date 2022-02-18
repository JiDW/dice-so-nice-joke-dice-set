Hooks.once('diceSoNiceReady', (dice3d) => {

    //All anvils
    dice3d.addSystem({ id: "prank-1", name: "Prank - All Anvils" }, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'],
        font: "FoundryVTT",
        system: "prank-1"
    });

    //All 20s
    dice3d.addSystem({ id: "prank-2", name: "Prank - All 20" }, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
        system: "prank-2"
    });

    //17-18-19-20
    dice3d.addSystem({ id: "prank-3", name: "Prank - High numbers" }, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: ['17', '17', '17', '17', '17', '18', '18', '18', '18', '18', '19', '19', '19', '19', '19', '20', '20', '20', '20', '20'],
        system: "prank-3"
    });

    //17-18-19-Anvil
    dice3d.addSystem({ id: "prank-4", name: "Prank - High numbers w/ anvil" }, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: ['17', '17', '17', '17', '17', '18', '18', '18', '18', '18', '19', '19', '19', '19', '19', 'F', 'F', 'F', 'F', 'F'],
        font: "FoundryVTT",
        system: "prank-4"
    });

    //All 1s
    dice3d.addSystem({ id: "prank-5", name: "Prank - All 1" }, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
        system: "prank-5"
    });
});
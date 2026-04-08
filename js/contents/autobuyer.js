const AUTOS = {
    update() {
        for (let x = 1; x <= 4; x++) if (player.autobuyer[this[x].id]) UPGS.replicanti.max(x)
        if (player.autobuyer["auto_rg"]) FORMS.replicanti.galaxy.reset(true)
        if (player.autobuyer["auto_rsac"]) FORMS.replicanti.sacrifice.doSac()
        if (player.autobuyer["auto_ic"]) FORMS.inf.comp.reset()
        if (player.autobuyer["auto_ip"]) UPGS.inf_rep.max(1)
        for (let x = 9; x <= 12; x++) if (player.autobuyer[this[x].id]) FORMS.replicator.gen.buy(x-8, true)
    },
    length: 12,
    1: {
        dis: "Replicanti Storage autobuyer",
        id: "auto_rs",
        unl() { return FORMS.inf.seen() },
        see() { return player.chals.comps.includes("normal1") },
        see_desc: "Complete challenge 1 to unlock.",
    },
    2: {
        dis: "Replicanti Multiplier autobuyer",
        id: "auto_rm",
        unl() { return FORMS.inf.seen() },
        see() { return player.chals.comps.includes("normal2") },
        see_desc: "Complete challenge 2 to unlock.",
    },
    3: {
        dis: "Replicanti Power autobuyer",
        id: "auto_rp",
        unl() { return FORMS.inf.seen() },
        see() { return player.chals.comps.includes("normal3") },
        see_desc: "Complete challenge 3 to unlock.",
    },
    4: {
        dis: "Repeated Replicanti autobuyer",
        id: "auto_rr",
        unl() { return FORMS.inf.seen() },
        see() { return player.chals.comps.includes("normal4") },
        see_desc: "Complete challenge 4 to unlock.",
    },
    5: {
        dis: "Replicanti Galaxy autobuyer",
        id: "auto_rg",
        unl() { return FORMS.inf.seen() },
        see() { return player.chals.comps.includes("normal5") },
        see_desc: "Complete challenge 5 to unlock.",
    },
    6: {
        dis: "Replicanti Sacrifice autobuyer",
        id: "auto_rsac",
        unl() { return player.breakInf },
        see() { return player.chals.comps.includes("inf4") },
        see_desc: "Complete Infinity challenge 4 to unlock.",
    },
    7: {
        dis: "Infinity Compressor autobuyer",
        id: "auto_ic",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
    8: {
        dis: "Infinity Point autobuyer",
        id: "auto_ip",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
    9: {
        dis: "Replicator 1 autobuyer",
        id: "auto_r1",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
    10: {
        dis: "Replicator 2 autobuyer",
        id: "auto_r2",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
    11: {
        dis: "Replicator 3 autobuyer",
        id: "auto_r3",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
    12: {
        dis: "Replicator 4 autobuyer",
        id: "auto_r4",
        unl() { return player.breakInf },
        see() { return ACHS.has(48) },
        see_desc: `Get Achievement "Yes Inflation".`,
    },
}

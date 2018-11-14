const fs = require("fs");

let bt = "";
let et = "";
let d = "";
const musics = [];
fs.readFileSync("./datas.json").toString().split("\n").forEach((l, i) => {
    if (i % 2 == 0) {
        const trx = /`(.*?)`/g;
        const drx = /\*(.*?)\*/g;
        bt = trx.exec(l)[1];
        et = trx.exec(l)[1];
        d = drx.exec(l)[1];
    }else {
        const rx = /\*\*(.*?)\*\*/g;
        const name = rx.exec(l)[1];
        musics.push({
            beginTime: bt,
            endTime: et,
            description: d,
            music: name
        });
    }
});
console.log(JSON.stringify(musics, null));
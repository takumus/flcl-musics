var dataStr = '[{"beginTime":"00:20","endTime":"02:27","description":"マミミと橋の下の","music":"ONE LIFE - the pillows"},{"beginTime":"03:25","endTime":"04:45","description":"ハルコに轢かれる","music":"Runners High - the pillows"},{"beginTime":"08:27","endTime":"09:48","description":"踏切でハルコと遭遇、病院で診察される","music":"Stalker - the pillows"},{"beginTime":"11:00","endTime":"13:25","description":"ハルコ家政婦になる漫画風","music":"Come Down - the pillows"},{"beginTime":"16:15","endTime":"18:00","description":"ナオタ家から走り出し、マミミタバコ","music":"Bran-new lovesong - the pillows"},{"beginTime":"18:08","endTime":"19:03","description":"マミミが倒れ、ナオタの頭から腕が出る","music":"Runners High - the pillowsとAdvice - the pillowsが交互"},{"beginTime":"19:27","endTime":"20:37","description":"カンチと腕が戦い、ハルコがギターを振りかざす","music":"Sleepy Head - the pillows"},{"beginTime":"21:07","endTime":"21:45","description":"絆創膏が取れた。酸っぱいのは苦手だけど飲む","music":"Little Busters - the pillows"}]';
var data = JSON.parse(dataStr);
var id = setInterval(() => {
    var time = /(..):(..)/.exec(document.querySelector(".time").innerHTML);
    var timeNum = Number(time[1] + time[2]);
    data.forEach(function(music) {
        var bt = Number(music.beginTime.replace(":", ""));
        var et = Number(music.endTime.replace(":", ""));
        if (bt <= timeNum && timeNum <= et) {
            console.log(time[1] + ":" + time[2], music.music);
        }
    });
}, 500);
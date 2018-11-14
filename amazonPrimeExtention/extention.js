var data = [{"beginTime":"00:20","endTime":"02:27","description":"マミミと橋の下の","music":"ONE LIFE - the pillows"},{"beginTime":"03:25","endTime":"04:45","description":"ハルコに轢かれる","music":"Runners High - the pillows"},{"beginTime":"08:27","endTime":"09:48","description":"踏切でハルコと遭遇、病院で診察される","music":"Stalker - the pillows"},{"beginTime":"11:00","endTime":"13:25","description":"ハルコ家政婦になる漫画風","music":"Come Down - the pillows"},{"beginTime":"16:13","endTime":"18:00","description":"ナオタ家から走り出し、マミミタバコ","music":"Bran-new lovesong - the pillows"},{"beginTime":"18:08","endTime":"18:24","description":"倒れるマミミ、暴れるナオタ","music":"Advice - the pillows"},{"beginTime":"18:24","endTime":"18:27","description":"バイクに乗るハルコ","music":"Runners High - the pillows"},{"beginTime":"18:27","endTime":"18:44","description":"絆創膏が剥がれそうなナオタ","music":"Advice - the pillows"},{"beginTime":"18:44","endTime":"18:48","description":"バイクに乗るハルコ","music":"Runners High - the pillows"},{"beginTime":"18:48","endTime":"19:00","description":"手とカンチ生えてくるナオタ","music":"Advice- the pillows"},{"beginTime":"19:25","endTime":"20:35","description":"カンチと腕が戦い、ハルコがギターを振りかざす","music":"Sleepy Head - the pillows"},{"beginTime":"21:05","endTime":"21:45","description":"絆創膏が取れた。酸っぱいのは苦手だけど飲む","music":"Little Busters - the pillows"}]

var id;
function createElement() {
    var element = document.createElement("div");
    element.style.position = "fixed";
    element.style.top = "90%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
    element.style.zIndex = 99999;
    element.style.fontSize = "3em";
    element.style.color = "white";
    element.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 1)";
    element.style.opacity = 0;
    element.style.transition = "all 0.3s";
    element.style.whiteSpace = "nowrap";
    document.body.appendChild(element);
    return element;
}
function init() {
    clearInterval(id);
    var element = createElement();
    var elementText = "";
    var elementTextIndex = 0;
    setInterval(function() {
        if (elementText.length <= elementTextIndex) return;
        element.innerHTML += elementText.charAt(elementTextIndex);
        elementTextIndex++;
    }, 30);
    var prevMusic;
    id = setInterval(() => {
        var time = /(..):(..)/.exec(document.querySelector(".time").innerHTML);
        var timeNum = Number(time[1] + time[2]);
        var currentMusic = null;
        data.forEach(function(music) {
            var bt = Number(music.beginTime.replace(":", ""));
            var et = Number(music.endTime.replace(":", ""));
            if (bt <= timeNum && timeNum <= et) {
                currentMusic = music;
            }
        });
        if (currentMusic) {
            if (prevMusic != currentMusic) {
                console.log(time[1] + ":" + time[2], currentMusic.music);
                elementText = currentMusic.music;
                element.innerHTML = "";
                elementTextIndex = 0;
                element.style.opacity = 1;
            }
            prevMusic = currentMusic;
        }else {
            elementText = element.innerHTML = "";
            elementTextIndex = 0;
            element.style.opacity = 0;
            prevMusic = null;
        }
    }, 500);
}
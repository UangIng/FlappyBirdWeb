//初始化游戏精灵，作为游戏入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById("game_canvas");
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create()
        loader.onLoaded(map => this.onResourceFirstLoaded(map));


        // let image = new Image();
        // image.src = './res/background.png';
        // image.onload = () => {
        //     this.ctx.drawImage(
        //         image,
        //         0,
        //         0,
        //         image.width,
        //         image.height,
        //         0,
        //         0,
        //         image.width,
        //         image.height);
        // }

    }

    onResourceFirstLoaded(map) {
        console.log(map);
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {

        //首先重置游戏是没有结束的~
        this.director.isGameOver = false;

        this.dataStore
            .put("birds", Birds)
            .put("pencils", [])
            .put("background", BackGround)
            .put("land", Land)
            .put("score",Score)
            .put("startButton", StartButton);
        // let backGround = new BackGround(this.ctx, this.dataStore.res.get('background'));
        //
        this.registerEvent();
        //创建铅笔要在游戏逻辑运行之前
        this.director.run();
    }

    registerEvent() {
        this.canvas.addEventListener("touchstart", e => {
            //    屏蔽掉JS事件冒泡
            e.preventDefault();
            console.log(this);
            if (this.director.isGameOver) {
                console.log('游戏开始');
                this.init();
            } else {
                this.director.birdsEvent();
            }
        })
    }
}
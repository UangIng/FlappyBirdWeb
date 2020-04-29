//精灵的基类，负责初始化精灵加载的资源和大小以及位置
import {DataStore} from "./DataStore.js";

export class Sprite {
    constructor(
        img = null,
        srcX = 0,
        srcY = 0,
        srcW = 0,
        srcH = 0,
        x = 0,
        y = 0,
        width = 0,
        height = 0) {
        this.dataStore = DataStore.getInstance()
        this.ctx = this.dataStore.ctx;
        this.img = img
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static getImage(key) {
        return DataStore.getInstance().res.get(key);
    }

    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height) {
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height
        )
    }

}

// this.img,//图片地址
// this.srcX,//开始剪切图片的 x 坐标位置
// this.srcY,//开始剪切图片的 y 坐标位置
// this.srcW,//被剪切图像的宽度（就是裁剪之前的图片宽度，这里的宽度若小于图片的原宽。则图片多余部分被剪掉；若大于，则会以空白填充）
// this.srcH,//被剪切图像的高度（就是裁剪之前的图片高度）
// this.x,//在画布上放置图像的 x 坐标位置
// this.y,//在画布上放置图像的 y 坐标位置
// this.width,//要使用的图像的宽度（就是裁剪之后的图片高度，放大或者缩放）
// this.height//要使用的图像的高度（就是裁剪之后的图片高度，放大或者缩放）
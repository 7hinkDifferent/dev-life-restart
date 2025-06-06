export default class CyberMain extends ui.view.CyberTheme.CyberMainUI {
    constructor() {
        super();
        this.btnRemake.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.MODE));
        this.btnAchievement.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.ACHIEVEMENT));
        this.btnThanks.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.THANKS));
        this.btnGithub.on(Laya.Event.CLICK, this, goto, ['github']);
        this.btnDiscord.on(Laya.Event.CLICK, this, goto, ['discord']);
        this.btnThemes.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.THEMES));
        this.btnSaveLoad.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.SAVELOAD));
        this.on(Laya.Event.RESIZE, this, () => {
            const scale = Math.max(
                this.width / this.imgBg.width,
                this.height / this.imgBg.height
            );
            this.imgBg.scale(scale, scale);
        });
    }

    static load() {
        return [
            "fonts/方正像素12.ttf",
            "images/atlas/images/accessories.atlas",
            "images/atlas/images/border.atlas",
            "images/atlas/images/button.atlas",
            "images/atlas/images/icons.atlas",
            "images/atlas/images/progress.atlas",
            "images/atlas/images/slider.atlas",
        ]
    }

    init() {
        this.banner.visible =
        this.btnDiscord.visible =
        this.btnAchievement.visible =
        this.btnThanks.visible = !!core.times;
    }
}
import {
  PolyMod,
  MixinType,
  SettingType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class PolyProxy extends PolyMod {
  preInit = (pml) => {
    pml.registerSettingCategory("PolyProxy");
    pml.registerSetting(
      "Proxy Url",
      "ppurl",
      SettingType.CUSTOM,
      "https://polyproxy.polymodloader.com/",
      [
        { title: "Official", value: "https://polyproxy.polymodloader.com/" },
        { title: "Rxrk", value: "https://proxy.rxk.workers.dev/" },
        { title: "Local", value: "http://localhost:3000/" },
      ],
    );
    this.url = () => {
      return pml.getSetting("ppurl");
    };

    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: `"https://vps.kodub.com/"`,
      tokenEnd: `"https://vps.kodub.com/"`,
      func: `ActivePolyModLoader.getMod("polyproxy+").url()`,
    });
  };
}

export let polyMod = new PolyProxy();

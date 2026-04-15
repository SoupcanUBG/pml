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
    { title: "1",  value: "https://value1test.com" },
    { title: "2",     value: "https://value2test.com" },
    { title: "3",       value: "https://value3test.com" },
  ]
);
    this.url = pml.getSetting("ppurl");

    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: `"https://vps.kodub.com/"`,
      tokenEnd: `"https://vps.kodub.com/"`,
      func: `ActivePolyModLoader.getMod("www").url`,
    });
    // console.log("PolyProxy loaded\n ProxyUrl: " + this.url);

  };
}

export let polyMod = new PolyProxy();


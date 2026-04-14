import {
  PolyMod,
  MixinType,
  SettingType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";
  
class PolyProxy extends PolyMod {
  preInit = (pml) => {
    pml.registerSettingCategory("PolyProxy");
    pml.registerSetting(
     "Server URL",
     "MyMod_ServerURL",
    SettingType.CUSTOM,
     "https://example.com/api",  // default value
  [
    { title: "Production",  value: "https://example.com/api" },
    { title: "Staging",     value: "https://staging.example.com/api" },
    { title: "Local",       value: "http://localhost:3000/api" },
  ]
);
    this.url = "https://polyproxy.polymodloader.com/";
    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: `https://vps.kodub.com/`,
      tokenEnd: `https://vps.kodub.com/`,
      func: this.url,
    });
    console.log("PolyProxy loaded\n ProxyUrl: " + this.url);

  };
}

export let polyMod = new PolyProxy();


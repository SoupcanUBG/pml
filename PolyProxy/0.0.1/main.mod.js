import { PolyMod, MixinType, } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";


class PastesDevImport extends PolyMod {
    preInit = (pml) => {
      proxyURL = "https://polyproxy.polymodloader.com/";
      pml.registerGlobalMixin({
            type: MixinType.REPLACEBEWEEN,
            tokenStart: `https://vps.kodub.com/`,
            tokenEnd: `https://vps.kodub.com/`,
            func: ProxyUrl,
        });
        console.log("PolyProxy loaded\n URL:" + proxyUrl);
    };
}

export let polyMod = new PastesDevImport();

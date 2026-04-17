import {
  PolyMod,
  MixinType,
  SettingType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class SpeedDecimalPlaces extends PolyMod {
  preInit = (pml) => {
    pml.registerSettingCategory("Speedometer Decimal Places");
    pml.registerSetting(
      "Decimal places",
      "speeddecplaces",
      SettingType.CUSTOM,
      3,
      [
        { title: "None", value: 0 },
        { title: "1", value: 1 },
        { title: "2", value: 2 },
        { title: "3", value: 3 }
      ],
    );

    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: `Math.trunc(n).toString();`,
      tokenEnd: `Math.trunc(n).toString();`,
      func: `n.toFixed(Number.parseInt(ActivePolyModLoader.getSetting("speeddecplaces")));`
    });
  };
}

export let polyMod = new SpeedDecimalPlaces();

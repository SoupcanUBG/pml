import {
  PolyMod,
  MixinType,
  SettingType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class ThreeDecSpeedometer extends PolyMod {
  init = (pml) => {
    pml.registerSettingCategory("Custom Decimal Speedometer");
    pml.registerSetting("Decimal places", "spedecpla", "custom", 3, [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
    ]);
    pml.registerClassMixin(
      scope: "Ot.prototype",
      path: "update",
      type: MixinType.REPLACEBETWEEN,
      tokenStart: "Math.trunc(n).toString();",
      tokenEnd: "Math.trunc(n).toString();",
      func: `n.toFixed(Number.parseInt(ActivePolyModLoader.getSetting("spedecpla")));`,
    );
  };
}

export let polyMod = new ThreeDecSpeedometer();

import {
  PolyMod,
  MixinType,
  SettingType,
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class ThreeDecimalSpeedometer extends PolyMod {
  init = (pml) => {
    pml.registerSettingCategory("Custom Decimal Speedometer");
    pml.registerSetting(
      "Decimal places",
      "speedometer",
      SettingType.CUSTOM,
      "3",
      [
        { title: "1", value: "1" },
        { title: "2", value: "2" },
        { title: "3", value: "3" },
        { title: "4", value: "4" },
        { title: "5", value: "5" },
      ],
    );
    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,
      tokenStart: `const i = Math.trunc(n).toString();`,
      tokenEnd: `const i = Math.trunc(n).toString();`,
      func: `const precision = Number.parseInt(ActivePolyModLoader.getSetting("speedometer")) ?? 0;\n const i = n.toFixed(precision);`,
     )};
  };
}
export let polyMod = new ThreeDecimalSpeedometer();



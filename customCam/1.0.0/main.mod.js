import {
  PolyMod,
  MixinType
} from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class CustomCamera extends PolyMod {
  preInit = (pml) => {

    pml.registerGlobalMixin({
      type: MixinType.REPLACEBETWEEN,

      tokenStart: `const r = new THREE.Vector3(0,1,0);`,
      tokenEnd: `1.get(this, b, "f").set(`,

      func: `
const offset
new
THREE.Vector3(0, 2, -5);
1.get(this, y,
"f").position.copy(t).add(offset.applyQuaternion(n));
1.get(this, y,
"f").quaternion.copy(n).multiply(new
THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0)));
1.get(this, y,
"f").updateMatrix(;
`
    });

    console.log("CustomCamera mod loaded");
  };
}

export let polyMod = new CustomCamera();

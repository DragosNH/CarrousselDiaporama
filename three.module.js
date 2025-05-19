export const VERSION = '0.152.2';
export class Scene { constructor() { this.children = []; } add(obj) { this.children.push(obj); } }
export class PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    this.position = { z: 0 };
    this.aspect = aspect;
    this.updateProjectionMatrix = () => {};
  }
}
export class WebGLRenderer {
  constructor() {
    this.domElement = document.createElement('canvas');
  }
  setSize() {}
  render() {}
  setPixelRatio() {}
}
export class BoxGeometry {}
export class MeshNormalMaterial {}
export class Mesh {
  constructor(geo, mat) {}
}

import * as THREE from './three.module.js';

/**
 * Simplified OrbitControls for demo
 */
class OrbitControls {
  constructor(object, domElement) {
    this.object = object;
    this.domElement = domElement;
    this.enabled = true;
  }
  update() {}
}

export { OrbitControls };

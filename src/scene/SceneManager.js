import * as THREE from 'three';
import { CONFIG } from '../config.js';

/**
 * SceneManager — portrait Three.js scene with white background and realistic lighting.
 */
export class SceneManager {
  constructor(container) {
    this.container = container;
    this.width = container.clientWidth;
    this.height = container.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xffffff);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.localClippingEnabled = true;
    container.appendChild(this.renderer.domElement);

    const aspect = this.width / this.height;
    const camH = CONFIG.WORLD.HEIGHT;
    const camW = camH * aspect;
    this.camera = new THREE.OrthographicCamera(
      -camW / 2, camW / 2,
      camH / 2, -camH / 2,
      0.1, 100
    );
    this.camera.position.z = 10;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this._setupLighting();
    this._createEnvironment();

    this._resizeObserver = new ResizeObserver(() => this._onResize());
    this._resizeObserver.observe(container);
    window.addEventListener('resize', () => this._onResize());
  }

  _setupLighting() {
    const hemi = new THREE.HemisphereLight(0xffffff, 0xf0f0f0, 0.65);
    this.scene.add(hemi);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    this.scene.add(ambient);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
    this.keyLight.position.set(3, 8, 12);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(1024, 1024);
    this.keyLight.shadow.camera.near = 0.5;
    this.keyLight.shadow.camera.far = 40;
    const shadowSpan = Math.max(CONFIG.WORLD.WIDTH, CONFIG.WORLD.HEIGHT) * 0.75;
    this.keyLight.shadow.camera.left = -shadowSpan;
    this.keyLight.shadow.camera.right = shadowSpan;
    this.keyLight.shadow.camera.top = shadowSpan;
    this.keyLight.shadow.camera.bottom = -shadowSpan;
    this.keyLight.shadow.bias = -0.0008;
    this.scene.add(this.keyLight);

    const fill = new THREE.DirectionalLight(0xeef4ff, 0.3);
    fill.position.set(-4, 2, 6);
    this.scene.add(fill);
  }

  _createEnvironment() {
    const { WIDTH, HEIGHT } = CONFIG.WORLD;

    const bg = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH + 2, HEIGHT + 2),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    bg.position.z = -0.5;
    this.scene.add(bg);
  }

  _onResize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;

    this.width = w;
    this.height = h;
    this.renderer.setSize(w, h);

    const aspect = w / h;
    const camH = CONFIG.WORLD.HEIGHT;
    const camW = camH * aspect;
    this.camera.left = -camW / 2;
    this.camera.right = camW / 2;
    this.camera.top = camH / 2;
    this.camera.bottom = -camH / 2;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this._resizeObserver.disconnect();
    this.renderer.dispose();
  }
}

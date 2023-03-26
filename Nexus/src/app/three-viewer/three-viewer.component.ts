import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three-viewer',
  template: '<div #container></div>',
  styleUrls: ['./three-viewer.component.scss'],
})
export class ThreeViewerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader!: GLTFLoader;
  private controls!: OrbitControls;
  private modelUrl = 'assets/scene.gltf'; // Replace with the correct path to your model
  private mixer!: THREE.AnimationMixer;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.initScene();
    this.animate();
  }

  ngOnDestroy() {
    this.renderer.dispose();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.el.nativeElement.clientWidth / this.el.nativeElement.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff); // Set clear color to white
    this.renderer.setSize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    // Set up camera position
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(this.scene.position);

    // Set up OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 50;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.camera.zoom = 6; // set zoom to 6x
    this.camera.updateProjectionMatrix(); // update camera projection matrix with new zoom value
  }
  

  loadModel() {
    this.loader = new GLTFLoader();
    this.loader.load(
      this.modelUrl,
      (gltf) => {
        // Called when the model is loaded
        this.scene.add(gltf.scene);
        this.mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          this.mixer.clipAction(clip).play();
        });
      },
      (xhr) => {
        // Called while loading is progressing
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        // Called when loading has errors
        console.error('An error occurred while loading the model:', error);
      }
    );
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });

    this.controls.update(); // Required when using OrbitControls
    if (this.mixer) {
      this.mixer.update(0.01);
    }
    this.renderer.render(this.scene, this.camera);
  }
}

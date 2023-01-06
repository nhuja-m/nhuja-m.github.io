// much of the inspiration and some blocks of code from: https://github.com/AndrewSink/STL-to-ASCII-Generator/blob/main/src/script.js
// & from: https://github.com/fireship-io/threejs-scroll-animation-demo

import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

//Create a clock for rotation
const clock = new THREE.Clock()

// Set rotate boolean variable
let rotateModel = true

let controls

// Creates empty mesh container
const myMesh = new THREE.Mesh();

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0, 0, 0);

//Lights
const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(100, 100, 400);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, .5);
pointLight2.position.set(-500, 100, -400);
scene.add(pointLight2);

// Parameters
const stlLoader = new STLLoader()

//Material
const material = new THREE.MeshStandardMaterial()
material.flatShading = true
material.side = THREE.DoubleSide;

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera Renderer Composer
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000)

const renderer = new THREE.WebGLRenderer();
const composer = new EffectComposer( renderer );

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let effect;

let characters = ' .:-+*=%@#$!'
const effectSize = { amount: .205 }
let backgroundColor = 'black'
let ASCIIColor = 'white'

function createEffect() {
    effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount, scale: 0 });
    effect.setSize(sizes.width, sizes.height);
    effect.domElement.style.color = ASCIIColor;
    effect.domElement.style.backgroundColor = backgroundColor;
}

createEffect()

document.getElementById('bg').appendChild(effect.domElement);
var eff = effect.domElement;
eff.id = 'effectID';

stlLoader.load(
    toLoad,
    function (geometry) {

        myMesh.material = material;
        myMesh.geometry = geometry;

        myMesh.geometry.center()

        myMesh.rotation.x = -90 * Math.PI / 180;

        myMesh.geometry.computeBoundingBox();
        var bbox = myMesh.geometry.boundingBox;

        myMesh.position.y = ((bbox.max.z - bbox.min.z) / 7);


        camera.position.x = ((bbox.max.x * 3));
        camera.position.y = ((bbox.max.y));
        camera.position.z = ((bbox.max.z * 3));

        scene.add(myMesh);

        controls = new OrbitControls(camera, effect.domElement)

        function tick() {
            if (rotateModel == true) {
                const elapsedTime = clock.getElapsedTime()
                myMesh.rotation.z = (elapsedTime) / 3
                render()
                window.requestAnimationFrame(tick)
            } else {
                render()
                window.requestAnimationFrame(tick)
            }
        }

        // Scroll Animation

        function moveCamera() {
          const t = document.body.getBoundingClientRect().top;
          myMesh.rotation.z += 0.05;
        }

        document.body.onscroll = moveCamera;
        moveCamera();

        function animate() {
          requestAnimationFrame(animate);
          myMesh.rotation.z += 0.002;

          effect.render(scene, camera); 
        }
        animate();
    }
)




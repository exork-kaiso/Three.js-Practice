import * as THREE from 'three';

const init = () => {

  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
  });

  renderer.setSize( width, height );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setClearColor('#000000');

  const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
  camera.position.z = 3;

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshPhongMaterial({
    color: '#ffffff'
  });
  const mesh = new THREE.Mesh( geometry, material );
  mesh.rotation.x = Math.PI * 0.2;
  mesh.rotation.y = Math.PI * 0.25;

  const light = new THREE.PointLight();
  light.position.x = 0.5;
  light.position.y = 0.5;
  light.position.z = 2.5;

  const scene = new THREE.Scene();
  scene.add( mesh );
  scene.add( light );

  renderer.render( scene, camera );

}

if ( document.readyState === 'complete' ){
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}

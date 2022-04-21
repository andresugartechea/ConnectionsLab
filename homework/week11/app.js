//1. To create the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //Attributes: (field of view (in degrees), aspect ratio, near clipping plane, far clipping plane)  

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//2. to resize renderer
window.addEventListener("resize", function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})

//3. To add the orbit controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

//4. For creating shapes
const geometry1 = new THREE.BoxGeometry(2, 2, 2);
const geometry2 = new THREE.BoxGeometry(400, 400, 400);

//5. Materials and textures for shapes
const cubeMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/1.jpeg"), side: THREE.DoubleSide}), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/2.jpg"), side: THREE.DoubleSide}), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/3.jpg"), side: THREE.DoubleSide}), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/4.jpg"), side: THREE.DoubleSide}), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/5.jpg"), side: THREE.DoubleSide}), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("img/6.jpg"), side: THREE.DoubleSide}), // back side
];
const material = new THREE.MeshFaceMaterial(cubeMaterials);
//const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true } );  

//6. To add material to the shape
const cube = new THREE.Mesh(geometry1, material);
const cube2 = new THREE.Mesh(geometry2, material);

//7. To add shapes to the scene
scene.add(cube);
scene.add(cube2);

camera.position.z = 1; //starting 'zoom' value


//8. For setting up
function update() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube2.rotation.z += 0.01;

}

function render() {
    renderer.render( scene, camera );
}

function animate() {
    requestAnimationFrame(animate);

    update();
    render();
}
animate();

////Commented out: this line of code is useful to give color to the cube instead of texture
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

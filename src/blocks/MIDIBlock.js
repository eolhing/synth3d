window.MIDIBlock = function()
{
    var geometry	= new THREE.BoxGeometry(1,1,1);
    var material	= new THREE.MeshLambertMaterial({map : Textures.midi}); 
    var mesh	    = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.5;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.transformable = true;
    mesh.blockType = "midi";
    return mesh;
};
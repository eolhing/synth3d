window.DelayBlock = function()
{
    var geometry	= new THREE.BoxGeometry(1,1,1);
    var material	= new THREE.MeshLambertMaterial({map : Textures.delay}); 
    var mesh	    = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.5;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.transformable = true;
    mesh.blockType = "delay";
    mesh.audioNode = audioCtx.createDelay(10.0);
    mesh.audioNode.delayTime.value = 1;
    mesh.audioNodeGain = audioCtx.createGain();
    mesh.audioNode.connect(mesh.audioNodeGain);
    mesh.linkedTo = [];
    mesh.outType = "signal";
    mesh.xFactor = null;
    mesh.yFactor = null;
    mesh.zFactor = null;
    mesh.oldX = 0;
    mesh.oldY = 0.5;
    mesh.oldZ = 0;
    mesh.factor = 1;
    return mesh;
};
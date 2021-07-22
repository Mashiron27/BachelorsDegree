import React, { Component } from 'react';
import { GLTFModel, AmbientLight, DirectionLight } from 'react-3d-viewer';

export default class ExteriorHandler extends Component {
    render() {
        return (
          <div>
            <GLTFModel src="./scene.gltf">
              <AmbientLight color={0xffffff}/>
              <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
              <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
            </GLTFModel>
          </div>
        )
    }
}
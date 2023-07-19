import React from 'react';
// import Unity, { UnityContent, useUnityContext } from 'react-unity-webgl';
import { Unity, useUnityContext } from 'react-unity-webgl';

// import framwork from '../../../public/town defense/Build/town defense.framework.js';
// import loader from '../../../public/town defense/Build/town defense.loader.js';
// import data from '../../../public/town defense/Build/town defense.data'
// import code from '../../../public/town defense/Build/town defense.wasm'


export default function Homepage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "town defense/build/town defense.loader.js",
    dataUrl: "town defense/build/town defense.data",
    frameworkUrl: "town defense/build/town defense.framework.js",
    codeUrl: "town defense/build/town defense.wasm",
  });

  console.log(unityProvider);

  // return <Unity unityProvider={unityProvider} />;

  // const unityContent = new UnityContent(
  //   '../../../public/town defense/Build/town defense.framework.js',
  //   '../../../public/town defense/Build/town defense.loader.js'
  // )

  // unityContent.on("quitted", () => {
  //   console.log('Game quit');
  // })
  // unityContent.on("loaded", () => {
  //   console.log('Game loaded');
  // })
  // unityContent.on("progress", progression => {
  //   console.log('Game loading', progression);
  // })
  // unityContent.on("error", message => {
  //   console.log('Game errored', message);
  // })
  // unityContent.on("DemoUnityToReact", (params) => {
  //   console.log('DemoUnityToReact', params);
  // })

  // return (
  //   <div>
  //       <p>Game</p>
  //       <Unity unityProvider={unityProvider} width="100%" height="100%" />
  //        {/* <Unity unityProvider={unityProvider} /> */}
  //   </div>
  
  return (
    <div>
      <Unity unityProvider={unityProvider} style={{width:960, height:540}} />
    </div>
  );

}

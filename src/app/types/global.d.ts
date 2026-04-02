declare module '*.scss';

declare module '*.module.css'  { 
  const  classes : {  [ key : string ] : string  } ; 
  export  default  classes ; 
}

declare module '*.module.scss'  { 
  const  classes : {  [ key : string ] : string  } ; 
  export  default  classes ; 
}

declare module '*.svg' {
  import React = require('react');
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

declare const __IS_DEV__: boolean;
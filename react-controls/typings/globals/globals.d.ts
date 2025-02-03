// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.ttf' {
  const content: string;
  export = content;
}

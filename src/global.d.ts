// For CSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For PNG images
declare module "*.png" {
  const value: string;
  export default value;
}

// For JPG images
declare module "*.jpg" {
  const value: string;
  export default value;
}

// For SVG images
declare module "*.svg" {
  const value: string;
  export default value;
}

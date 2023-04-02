import { proxy } from "valtio";

// think of this as React Context, whatever we do here, we'll be able to use it in our application
const state = proxy({
    intro: true, // a flag to determine whether we're currently on the home page or not
    color: "#efbd48", // default colour
    isLogoTexture: true, // are we displaying the logo on our cake
    isFullTexture: false,
    logoDecal: './logo-home.png', // if we have to apply our own logos or textures, this will be the default logo
    fullDecal: './logo-home.png' // initial full texture cake decal
});

export default state;
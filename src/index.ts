import * as twgl from 'twgl.js';

import createContext from './createContext';
import FluidSimulator from './FluidSimulator';
import getSimulationDimensions from './getSimulationDimensions';

const gl = createContext();

const { width, height } = getSimulationDimensions(gl.canvas.width, gl.canvas.height);
console.log(width, height)

const fluidSimulator = new FluidSimulator(gl, width, height);

function render(time: number) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    fluidSimulator.update(time);
    fluidSimulator.draw(time);

    requestAnimationFrame(render);
}

requestAnimationFrame(render);

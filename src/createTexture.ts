interface createTextureOptions {
    internalFormat: number;
    format: number;
    type: number;
    width: number;
    height: number;
    src: any;
}

/**
 * Creates a 2D texture based on the given options
 * @param gl
 * @param textureID
 * @param opt
 */
export default function createTexture(gl: any, textureID: number, opt: createTextureOptions) {
    gl.bindTexture(gl.TEXTURE_2D, textureID);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        opt.format,
        opt.width,
        opt.height,
        0,
        opt.format,
        opt.type,
        opt.src
    );
    // gl.generateMipmap(gl.TEXTURE_2D);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

/**
 * Creates a 2D texture of scalars
 * @param gl
 * @param textureID
 * @param width
 * @param height
 * @param src
 */
export function createScalarTexture(
    gl: any,
    textureID: number,
    width: number,
    height: number,
    src: any
) {
    return createTexture(gl, textureID, {
        internalFormat: gl.LUMINANCE,
        format: gl.LUMINANCE,
        type: gl.FLOAT,
        width,
        height,
        src,
    });
}

/**
 * Creates a 2D texture of vec2s
 * @param gl
 * @param textureID
 * @param width
 * @param height
 * @param src
 */
export function createVec2Texture(
    gl: any,
    textureID: number,
    width: number,
    height: number,
    src: any
) {
    return createTexture(gl, textureID, {
        internalFormat: gl.LUMINANCE_ALPHA,
        format: gl.LUMINANCE_ALPHA,
        type: gl.FLOAT,
        width,
        height,
        src,
    });
}

/**
 * Creates a 2D texture of vec3s
 * @param gl
 * @param width
 * @param height
 * @param src
 */
export function createVec3Texture(
    gl: any,
    textureID: number,
    width: number,
    height: number,
    src: any
) {
    return createTexture(gl, textureID, {
        internalFormat: gl.RGB,
        format: gl.RGB,
        type: gl.FLOAT,
        width,
        height,
        src,
    });
}

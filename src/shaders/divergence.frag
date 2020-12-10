#version 300 es
precision highp float;

in vec2 uv;
out vec4 fragColor;

uniform vec2 resolution;
uniform sampler2D w;

void main() {
    vec2 coord = gl_FragCoord.xy;
    vec2 base = texture(w, coord / (resolution + 1.0)).xy;
    vec2 rUv = (coord + vec2(1, 0)) / (resolution + 1.0);
    vec2 tUv = (coord + vec2(0, 1)) / (resolution + 1.0);

    // left, right, bottom, and top x samples
    float L = base.x;
    float R = texture(w, rUv).x;
    float B = base.y;
    float T = texture(w, tUv).y;

    float divergence = 0.5 * (R - L + T - B);
    fragColor = vec4(divergence, 0, 0, 1);
}

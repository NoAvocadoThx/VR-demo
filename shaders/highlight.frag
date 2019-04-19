#version 330 core

in vec3 Normal;
out vec4 color;

uniform int colorValue;

void main(void) {
  vec3 fragColor = vec3(0.67, 0.45, 0.23);
  color = vec4(fragColor, 0.5);
}
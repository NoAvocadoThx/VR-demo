#version 330 core

in vec3 Normal;
out vec4 color;

uniform vec3 colorValue = vec3(1.0,0.0,0.0);

void main(void) {
  color = vec4(colorValue, 0.2);
}
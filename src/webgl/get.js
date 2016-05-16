// Add a safe get method
import assert from 'assert';

export default function glGet(gl, name) {
  let value = name;
  if (typeof name === 'string') {
    value = this[name];
    assert(value, `Accessing gl.${name}`);
  }
  return value;
};
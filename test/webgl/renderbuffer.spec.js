import test from 'tape-catch';
import 'luma.gl/headless';
import {createGLContext, Renderbuffer} from 'luma.gl';

const fixture = {
  gl: createGLContext()
};

test('WebGL#Renderbuffer construct/delete', t => {
  const {gl} = fixture;

  t.throws(
    () => new Renderbuffer(),
    /.*WebGLRenderingContext.*/,
    'Renderbuffer throws on missing gl context');

  const renderbuffer = new Renderbuffer(gl);
  t.ok(renderbuffer instanceof Renderbuffer,
    'Renderbuffer construction successful');

  renderbuffer.delete();
  t.ok(renderbuffer instanceof Renderbuffer,
    'Renderbuffer delete successful');

  renderbuffer.delete();
  t.ok(renderbuffer instanceof Renderbuffer,
    'Renderbuffer repeated delete successful');

  t.end();
});

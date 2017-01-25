import assert from 'assert';
import parse5 from 'parse5';
import utils from '..';

describe('.getAttrIndex(node, name)', function () {
  it('returns index of attribute if set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(0, utils.getAttrIndex(node, 'foo'));
  });
  it('returns first index of attribute if set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1" foo="bar2"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(0, utils.getAttrIndex(node, 'foo'));
  });
  it('returns -1 if attribute is not set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(-1, utils.getAttrIndex(node, 'test'));
  });
});

describe('.hasAttr(node, name)', function () {
  it('true if attribute set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(true, utils.hasAttr(node, 'foo'));
  });
  it('returns false if attribute is not set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(false, utils.hasAttr(node, 'test'));
  });
});

describe('.getAttr(node, name)', function () {
  it('returns attribute if set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal('bar', utils.getAttr(node, 'foo'));
  });
  it('returns null if attribute is unset', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(null, utils.getAttr(node, 'bar'));
  });
  it('returns first value if attribute is set more than one times', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1" foo="bar2"></test-el>');
    let node = doc.childNodes[0];
    assert.equal('bar1', utils.getAttr(node, 'foo'));
  });
});

describe('.setAttr(node, name)', function () {
  it('change value of an already set attribute', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1"></test-el>');
    let node = doc.childNodes[0];
    utils.setAttr(node, 'foo', 'bar2');
    assert.equal('bar2', node.attrs[0].value);
  });
  it('set a new attribute', function () {
    let doc = parse5.parseFragment('<test-el></test-el>');
    let node = doc.childNodes[0];
    utils.setAttr(node, 'foo', 'bar');
    assert.equal('bar', node.attrs[0].value);
  });
  it('set first instance of attribute.', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1" foo="bar2"></test-el>');
    let node = doc.childNodes[0];
    utils.setAttr(node, 'foo', 'bar');
    assert.equal('bar', node.attrs[0].value);
  });
});

describe('.removeAttr(node, name)', function () {
  it('removes already set attribute', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    utils.removeAttr(node, 'foo');
    assert.equal(0, node.attrs.length);
  });
  it('removes all instances of attribute', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1" foo="bar2"></test-el>');
    let node = doc.childNodes[0];
    utils.removeAttr(node, 'foo');
    assert.equal(0, node.attrs.length);
  });
  it('do nothing if attribute is not set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar1"></test-el>');
    let node = doc.childNodes[0];
    utils.removeAttr(node, 'test');
    assert.equal(1, node.attrs.length);
  });
});

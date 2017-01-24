import assert from 'assert';
import parse5 from 'parse5';
import html5Utils from '..';

describe('.getAttr(node, name)', function () {
  it('returns attribute if set', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal('bar', html5Utils.getAttr(node, 'foo'));
  });
  it('returns null if attribute is unset', function () {
    let doc = parse5.parseFragment('<test-el foo="bar"></test-el>');
    let node = doc.childNodes[0];
    assert.equal(null, html5Utils.getAttr(node, 'bar'));
  });
  it('returns first value if attribute is set more than one times', function () {
    let doc = parse5.parseFragment('<test-el foo="bar" foo="blah blah"></test-el>');
    let node = doc.childNodes[0];
    assert.equal('bar', html5Utils.getAttr(node, 'foo'));
  });
});

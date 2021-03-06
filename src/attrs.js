import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
const _ = { find, findIndex, map };

export function getAttrObj(element, name) {
  const n = name.toLowerCase();
  return _.find(element.attrs, function(attr, i) {
    return attr.name.toLowerCase() === n;
  });
}

export function getAttrIndex(element, name) {
  const n = name.toLowerCase();
  return _.findIndex(element.attrs, function(attr, i) {
    return attr.name.toLowerCase() === n;
  });
}

export function hasAttr(element, name) {
  return getAttrIndex(element, name) !== -1;
}
export function getAttr(element, name) {
  const attr = getAttrObj(element, name);
  return attr !== undefined ? attr.value : null;
}

export function setAttr(element, name, value) {
  const i = getAttrIndex(element, name);
  if (i > -1) {
    element.attrs[i].value = value;
  } else {
    element.attrs.push({ name, value });
  }
}

export function removeAttr(element, name) {
  const n = name.toLowerCase();
  return _.map(element.attrs, function(attr, i) {
    if(attr.name.toLowerCase() !== n) {
      return true;
    };
    element.attrs.splice(i, 1);
  });
}

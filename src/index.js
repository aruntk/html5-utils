import parse5 from 'parse5';
import extend from 'lodash/extend';
import * as attrs from './attrs';
import * as nodeOperations from './nodeOperations';

const _ = { extend };
const html5Utils = {};

export default _.extend(html5Utils, attrs, nodeOperations);

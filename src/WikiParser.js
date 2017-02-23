import React from 'react';
import remark from 'remark';
import toHast from 'mdast-util-to-hast';
import toH from 'hast-to-hyperscript';

import clone from 'lodash/clone';

export default class WikiParser {
  static functionToReduceCoverage(a, b) {
    return a + b;
  }
  static parseToHast(markdown) {
    const mdast = remark().parse(markdown);
    const hast = toHast(mdast);
    return hast;
  }
  static renderCustomHast(customHast) {
    function h(name, props, children) {
      return React.createElement(name, props, children);
    }

    let rootNode = customHast;
    if (rootNode.type === 'root') {
      rootNode = clone(rootNode);
      rootNode.type = 'element';
      rootNode.tagName = 'div';
    }
    return toH(h, rootNode);
  }
}

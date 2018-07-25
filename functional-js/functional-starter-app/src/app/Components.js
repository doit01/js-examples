import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { pipe, map, sum, partial } from 'ramda';

import { } from './Actions';

const { div, h1, pre, } = hh(h);

export function view(dispatch, state) {
  return contentWrapper([
    applicationHeader(),
    debugAppState(state),
  ]);
}

function applicationHeader() {
  return h1({ className: 'f1 pv2 bb' }, 'App');
}

function contentWrapper(elements) {
  return div({ className: 'mw6 center' }, [
    ...elements,
  ]);
}

function debugAppState(state) {
  return pre(JSON.stringify(state, null, 2));
}

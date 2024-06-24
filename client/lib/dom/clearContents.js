import { getNode } from './getNode.js';
import { isString } from '../utils/type.js';

export default function clearContents(node) {
  //default를 붙여주면 기본 내보내기
  if (isString(node)) node = getNode(node);

  if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = '';
    return;
  }

  node.textContent = '';
}

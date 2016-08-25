import { IBTNode } from './node'; 
import utils from './utils';

/*******************************************************
 * Implementation of a depth-first binary tree traversal
 *******************************************************/
/**
 * Traverse the binary tree all the while 
 * printing each node's value
 */ 
export function traverse(root: IBTNode, verbose: boolean = false): Array<any> {
  utils.narrate(verbose, '--- depth-first search ---');

  return visitNode(root, 1, [], verbose);
}

/**
 * Inspects current node and keeps travesing down
 */
function visitNode(root: IBTNode, level: number, output: Array<any>, verbose: boolean = false): Array<any> {
  if (!root) {
    return output;
  }

  utils.narrate(verbose, root.value);
  output.push(root.value);

  utils.narrate(verbose, `level ${level} | going down left`);  
  output = visitNode(root.left, level + 1, output, verbose);
  utils.narrate(verbose, `level ${level} | going down right`);
  output = visitNode(root.right, level + 1, output, verbose);

  return output; 
}

export default {
  traverse
}
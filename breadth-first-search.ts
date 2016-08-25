import { IBTNode } from './node';
import utils from './utils';

/**********************************************************
 * Implementation of a breadth-first binary tree traversal
 * http://www.geeksforgeeks.org/level-order-tree-traversal/
 **********************************************************/
/**
 * Traverse the binary tree all the while 
 * printing each node's value
 */ 
export function traverse(root: IBTNode, verbose: boolean = false): Array<any> {
  utils.narrate(verbose, '--- breadth-first search ---');
  let output = [];
  
  const h = height(root);
  utils.narrate(verbose, `tree height is: ${h}`);
  
  for (let i = 1; i <= h; i++) {
    output = visitNode(root, i, output, verbose);
  }
  return output;
}
 
/**
 * Inspects current node and keeps travesing left-to-right top-to-bottom
 */
function visitNode(root: IBTNode, level: number, output: Array<any>, verbose: boolean = false): Array<any> {
  if (!root) {
    return output;
  }

  if (level === 1) {
    utils.narrate(verbose, root.value);
    output.push(root.value);
  }
  else if (level > 1)
  {
    utils.narrate(verbose, `level: ${level} | going down left`);
    output = visitNode(root.left, level - 1, output, verbose);
    utils.narrate(verbose, `level: ${level} | going down right`);
    output = visitNode(root.right, level - 1, output, verbose);
  }
  
  return output;
}

/**
 * Compute the "height" of a tree -- the number of
 * nodes along the longest path from the root node
 * down to the farthest leaf node.
 */
function height(node: IBTNode): number {
  if (!node) {
    return 0;
  }
  else
  {
    /* compute the height of each subtree */
    const lheight = height(node.left);
    const rheight = height(node.right);
 
    /* use the larger one */
    if (lheight > rheight) {
      return lheight + 1;
    }
    return rheight + 1;
  }
}

export default {
  traverse
}
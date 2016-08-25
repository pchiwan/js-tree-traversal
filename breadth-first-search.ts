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
export function traverse(root: IBTNode, verbose: boolean = false): void {
  utils.narrate(verbose, '--- breadth-first search ---');
  
  const h = height(root);
  utils.narrate(verbose, `tree height is: ${h}`);
  
  for (let i = 1; i <= h; i++) {
    printLevel(root, i, verbose);
  }
}
 
/**
 * Print nodes at a given level
 */
function printLevel(root: IBTNode, level: number, verbose: boolean = false): void {
  if (!root) {
    return;
  }

  if (level === 1) {
    console.log(root.value);
  }
  else if (level > 1)
  {
    utils.narrate(verbose, `level: ${level} | going down left`);
    printLevel(root.left, level - 1, verbose);
    utils.narrate(verbose, `level: ${level} | going down right`);
    printLevel(root.right, level - 1, verbose);
  }
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
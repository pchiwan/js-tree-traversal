import { IBTNode } from './node'; 
import utils from './utils';

/*******************************************************
 * Implementation of a depth-first binary tree traversal
 *******************************************************/
/**
 * Traverse the binary tree all the while 
 * printing each node's value
 */ 
export function traverse(root: IBTNode, verbose: boolean = false): void {
  utils.narrate(verbose, '--- depth-first search ---');

  printLevel(root, 1, verbose);
}

function printLevel(root: IBTNode, level: number, verbose: boolean = false): void {
  if (!root) {
    return;
  }

  console.log(root.value);
  utils.narrate(verbose, `level ${level} | going down left`);  
  printLevel(root.left, level + 1, verbose);
  utils.narrate(verbose, `level ${level} | going down right`);
  printLevel(root.right, level + 1, verbose);
}

export default {
  traverse
}
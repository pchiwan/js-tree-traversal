import { BTNode } from './node';
import bfs from './breadth-first-search';
import dfs from './depth-first-search';

const node = new BTNode(1);
node.left = new BTNode(2);
node.right= new BTNode(3);
node.left.left= new BTNode(4);
node.left.right= new BTNode(5);
node.right.left= new BTNode(6);
node.right.right= new BTNode(7);
node.left.left.left = new BTNode(8);
node.left.left.right = new BTNode(9); 

console.log('--- breadth-first search ---');
console.log(bfs.traverse(node, false).join(' '));
console.log('--- depth-first search ---');
console.log(dfs.traverse(node, false).join(' '));

/**
 * Binary tree node interface definition 
 */
export interface IBTNode{
  value: any;
  left: IBTNode;
  right: IBTNode;
}

/**
 * Binary tree node class definition 
 */
export class BTNode implements IBTNode{
  value: any;
  left: IBTNode;
  right: IBTNode;

  constructor(value: any = 0) {
    this.value = value;
  }
}
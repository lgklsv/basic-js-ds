const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    
  constructor() {
      this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
      this.rootNode = addData(this.rootNode, data);

      function addData(node, data) {
          if(!node) {
              return new Node(data);
          }
          
          if(node.data === data) {
              return node;
          }

          if(data < node.data) {
              node.left = addData(node.left, data);
          } else {
              node.right = addData(node.right, data);
          }

          return node;
      }
  }

  has(data) {
      return hasData(this.rootNode, data);

      function hasData(node, data) {
          if(!node) {
              return false;
          }

          if(node.data === data) {
              return true;
          }

          if(data < node.data) {
              return hasData(node.left, data);
          }else {
              return hasData(node.right, data);
          }
      }
  }

  find(data) {
      return findData(this.rootNode, data);

      function findData(node, data) {
          if(!node) {
              return null;
          }

          if(node.data === data) {
              return node;
          }

          if(data < node.data) {
              return findData(node.left, data);
          }else {
              return findData(node.right, data);
          }
      }
  }

  remove(data) {
    return removeData(this.rootNode, data);

    function removeData(node, data){
      if(!node) {
          return null;
      }

      if(data < node.data) {
          node.left = removeData(node.left, data);
          return node;
      } else if (data > node.data) {
          node.right = removeData(node.right, data);
          return node;
      } else {
          if(!node.left && !node.right) {
              return null;
          }
          if(!node.left) {
              node = node.right;
              return node;
          }
          if(!node.right) {
              node = node.left;
              return node;
          }

          let minRight = node.right;
          while(minRight.left) {
              minRight = minRight.left;
          }
          node.data = minRight.data;

          node.right = removeData(node.right, minRight.data);
          return node;
      }
    }
  }

  min() {
      if(!this.rootNode) {
          return;
      }

      function goLeft(node) {
          if(node.left == null) {
              return node.data;
          } 
          return goLeft(node.left);
      }
      return goLeft(this.rootNode);
  }

  max() {
      if(!this.rootNode) {
          return;
      }

      function goRight(node) {
          if(node.right == null) {
              return node.data;
          } 
          return goRight(node.right);
      }
      return goRight(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
public:
    void postorder(Node* p, vector<int>& res){
            
            for(int i=0;i<p->children.size();i++){
                postorder(p->children[i], res);
            }
                res.push_back(p->val);
    }
    
    vector<int> postorder(Node* root) {
        if(!root) return {};
        vector<int> res;
        postorder(root, res);
        return res;
    }
};
/*
// Definition for a Node.
class Node {
public:
    int val = NULL;
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
    vector<vector<int>> levelOrder(Node* root) {
        vector<vector<int>> ret;
        if (!root)
            return ret;
        ret.push_back(vector<int> {root->val});
        for (auto child : root->children) {
            vector<vector<int>> r = levelOrder(child);
            for (int i = 0; i < r.size(); ++i)
                if (i + 1 > ret.size() - 1)
                    ret.push_back(r[i]);
                else
                    ret[i + 1].insert(ret[i + 1].end(), r[i].begin(), r[i].end());
        }
        return ret;       
    }
};
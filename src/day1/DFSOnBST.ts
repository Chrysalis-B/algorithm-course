export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    if (!head) {
        return false;
    }
    else if (needle === head.value) {
        return true;
    }
    else if (needle <= head.value) {
        return dfs(head.left, needle);
    }
    else {
        return dfs(head.right, needle);
    }
}
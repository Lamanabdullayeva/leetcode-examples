function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false;

    let stack: string[] = [];
    const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in map) {
            let top = stack.pop() || '#';
            if (top !== map[char]) return false;
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
}
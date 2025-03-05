function isAnagram(s: string, t: string): boolean {
    
    s = s.normalize('NFC').toLowerCase();
    t = t.normalize('NFC').toLowerCase();

    let count: Record<string, number> = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};
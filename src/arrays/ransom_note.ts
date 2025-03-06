function canConstruct(ransomNote: string, magazine: string): boolean {
    let magazinMap = new Map<string, number>();

    for (let char of magazine) {
        magazinMap.set(char, (magazinMap.get(char) || 0) + 1);
    }

    for (let char of ransomNote) {
        if (!magazinMap.has(char) || magazinMap.get(char)! === 0) {
            return false
        }
        magazinMap.set(char, magazinMap.get(char) - 1)
    }
return true;
};
type letterFrequencyType = {
    [key: string]: number;
}

export function isIsogram(word: string): boolean {
    let letterFrequency: letterFrequencyType = {};
    const letterRegex = /[a-zA-Z]/;

    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLocaleLowerCase();
        if (char.match(letterRegex)) {
            if (!letterFrequency[char]) {
                letterFrequency[char] = 1;
            } else {
                // found duplicate letter
                return false;
            }
        }
    }

    return true;
}
export const findLongestWord = (words) => {
    let wordLengths = words.map(word => ({ word, length: word.length }));
    return wordLengths.reduce((longest, current) => current.length > longest.length ? current : longest);
};

export const countOccurrences = (arrays) => {
    return arrays.flat().reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
};

export const calculateTotal = (grades) => { // ✅ Export bien défini
    return grades
        .map(grade => grade < 50 ? grade + 15 : grade)
        .filter(grade => grade > 50)
        .reduce((sum, grade) => sum + grade, 0);
};

export let lastId = 0;
export const Tab = [];  // ✅ Assurer l'export de `Tab`

export const addEntry = (name, age) => {
    lastId++;
    Tab.push({ id: lastId, name, age });
};

export const searchById = (array, id) => {
    return array.find(item => item.id === id) || "Aucun élément trouvé";
};

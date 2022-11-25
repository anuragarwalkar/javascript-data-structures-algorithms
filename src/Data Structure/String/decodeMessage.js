/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    const decoder = {

    };

    let initialCharCode = 97;

    for (let i = 0; i < key.length; i++) {
        if (key[i].trim() && !decoder[key[i]]) {
            decoder[key[i]] = String.fromCharCode(initialCharCode)
            initialCharCode++;
        }
    }

    let finalString = "";

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            finalString += " ";
        } else {
            finalString += decoder[message[i]];
        }
    }

    return finalString;
};

const result = decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

console.log('result:', result);
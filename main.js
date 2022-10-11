// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

console.log("\nisAdmin");

function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true;
    } else {
        return false;
    }
}

let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
};
let user2 = {
firstName: 'Ian',
lastName: 'Rogers', 
userRole: "ADMIN"
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));

console.log("\ngetEmail");

function getEmail(user){
    let emailUser = (`${user.firstName}.${user.lastName}@codeimmersives.com`);
    return emailUser.toLowerCase();
}
console.log(getEmail({
    firstName: 'Anthony',
    lastName: 'DeRosa'
}));

console.log("\ngetPlaylistLength");

function getPlaylistLength(playlist){
    return playlist.songs.length;
}
console.log(getPlaylistLength({
    name: "my jamz",
    songs: [ "king park", "diamond eyes", "run away with me"]
}
));

console.log("\ngetHardestHomework");

function getHardestHomework(homeworkArray){

    let lowestHw = homeworkArray[0];

    for(let i = 0; i < homeworkArray.length; i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }

    return lowestHw.name;
}
console.log(getHardestHomework(
    [{ name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }]
));

console.log("\ncreatePhonebook");

function createPhonebook(namesArray, numbersArray){
    let phonebook = {};
    
    for(let i = 0; i < namesArray.length; i++){
       phonebook[namesArray[i]] = numbersArray[i]; 
    }
    return phonebook;
}
console.log(createPhonebook(
    ['Jimothy', 'Maria', 'Karl'], 
    ['123-456-7890', '000-000-0000', '999-888-7766']
));

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
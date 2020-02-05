var count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log(count);
console.log("For loop");
var keys = "abcdef";
for (var i_1 = 0; i_1 < keys.length; i_1++) {
    console.log(keys[i_1]);
}
console.log("while loop");
var i = 0;
while (i < keys.length) {
    console.log(keys[i]);
    ++i;
}
console.log("do-while loop");
i = 0;
do {
    console.log(keys[i]);
    ++i;
} while (i < keys.length);
console.log("for-of loop");
for (var item in keys) {
    console.log(item);
}
console.log("for-in loop");
var user = {
    name: 'Bob',
    age: 55
};
for (var key in user) {
    console.log(key + ": " + user[key]);
}

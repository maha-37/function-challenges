// اكتب دالة تستقبل مصفوفة من العناصر(سواء أرقام أو نصوص) وتُرجع مصفوفة جديدة تحتوي على نفس العناصر ولكن بترتيب عكسي.


function numbers(...Numbers) {
    let newArray = []
    for (i = 0; i < Numbers.length; i++) {
        newArray.unshift(Numbers[i])
    }
    return newArray

}
console.log(numbers(21, 24, 45, 55, 29, 33))


// اكتب دالة تستقبل مصفوفة من الأرقام أو النصوص وتُرجع مصفوفة جديدة تحتوي على العناصر الفريدة فقط(أي حذف العناصر المكررة).

function string(...useres) {
    let newarray = []
    for (let i = 0; i < useres.length; i++) {
        if (useres.indexOf(useres[i]) === i) {
            newarray.push(useres[i])
        }
    }
    return newarray
}
console.log(string("maha", "manal", "yahya", "maha", "salih", "omar", "maha"))

// التحقق من وجود عنصر معين في المصفوفة(مستوى صعب)
// اكتب دالة تستقبل مصفوفة وعنصراً محدداً، وتتحقق مما إذا كان العنصر موجوداً في المصفوفة أم لا.تُرجع true إذا كان العنصر موجوداً وfalse إذا لم يكن موجوداً.

function isIncloude(user, ...users) {
    if (users.includes(user)) {
        return true;
    }
    else {
        return false;

    }
}

console.log(isIncloude("yahya", "manal", "maha", "salih"))









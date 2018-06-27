var age = 23;

// switch operator
switch(true){
    case age < 13:
        console.log("John is a boy");
        break;
    case age >= 13 && age < 20:
        console.log("John is a teenager");
        break;
    case age >20 && age< 30:
        console.log("John is a young man");
        break;
    default:
        console.log("John is a man");
}

// ternary operator
var drink = age < 21 ? "juice":"beer"
console.log("John will drink " + drink)

// falsy value is undefine, null, 0, or NaN
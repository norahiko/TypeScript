//// [commentOnStaticMember1.ts]
class Greeter {
    //Hello World
    static foo(){
    }
}

//// [commentOnStaticMember1.js]
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.foo = function () {
    };
    return Greeter;
})();

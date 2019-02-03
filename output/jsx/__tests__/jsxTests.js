var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../spec/index", "../createElement", "../StatelessComponent"], function (require, exports, index_1, createElement_1, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function jsxTests() {
        index_1.describe('ReactLike render', function () {
            index_1.it('support custom tags as functions', function () {
                var Apple = function (props) { return createElement_1.ReactLike.createElement("div", { className: "apple" },
                    "I'm a ",
                    props.apple.color,
                    " apple"); };
                var Main = function (props) { return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("h1", null, "A list of apples"),
                    createElement_1.ReactLike.createElement("ul", null,
                        createElement_1.ReactLike.createElement("li", null, props.apples.map(function (a) { return createElement_1.ReactLike.createElement(Apple, { apple: a }); })))); };
                var apples = [{ color: 'red' }, { color: 'blue' }];
                var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, { apples: apples }), { indent: true });
                index_1.expect(s).toContain('<div class="apple">');
                index_1.expect(s).toContain("I'm a red apple");
                // console.log(s)
            });
            index_1.it('supports typed css properties', function () {
                var Comp = function () { return createElement_1.ReactLike.createElement("div", { className: "apple", style: { border: '1px solid pink', background: 'blue' } }, "i'm pink"); };
                var Main = function () { return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement(Comp, null)); };
                var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, null), { indent: true });
                index_1.expect(s).toContain('style="border: 1px solid pink; background: blue"');
                index_1.expect(s).toContain("i'm pink");
                // console.log(s)
            });
            index_1.it('stateless component', function () {
                var Person = /** @class */ (function (_super) {
                    __extends(Person, _super);
                    function Person() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Person.prototype.render = function () {
                        return createElement_1.ReactLike.createElement("div", null,
                            createElement_1.ReactLike.createElement("div", null,
                                "Name: ",
                                this.props.name),
                            createElement_1.ReactLike.createElement("div", null,
                                "Friends:",
                                createElement_1.ReactLike.createElement("ul", null, this.props.friends.map(function (f) { return createElement_1.ReactLike.createElement(Person, { name: f.name, friends: f.friends }); }))));
                    };
                    return Person;
                }(StatelessComponent_1.StatelessComponent));
                var p0 = { name: 'flo', friends: [] };
                var p1 = { name: 'seba', friends: [p0] };
                var persons = [p0, p1];
                var main = createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("p", null, "Some people:"),
                    persons.map(function (p) { return createElement_1.ReactLike.createElement(Person, { name: p.name, friends: p.friends }); }));
                var s = createElement_1.ReactLike.render(main, { indent: true });
                index_1.expect(s).toContain('Name: flo');
                index_1.expect(s).toContain('Name: seba');
                // console.log(s);
            });
            index_1.it('function attributes', function () {
                var main = createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert("foo\nhello"); } }, "click me"));
                var s = createElement_1.ReactLike.render(main, { indent: true });
                // console.log(s); // to be tested in the browser
            });
            // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
        });
    }
    exports.jsxTests = jsxTests;
});
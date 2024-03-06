/**
 *
 * Example 1
 * <div id="parent">
 * <div id="child">
 * <h1>I am a H1 tag</h1>
 * </div>
 * </div>
 *
 *
 */ /**
 * Example 2
 *Sibling element
 * <div id="parent">
 * <div id="child">
 * <h1>I am a H1 tag</h1>
 * <h2>I am a H2 tag</h1>
 * </div>
 * </div>
 *
 * Example 3
 *Sibling element
 * <div id="parent">
 * <div id="child 1">
 * <h1>I am a H1 tag</h1>
 * <h2>I am a H2 tag</h1>
 * </div>
 * <div id="child 2">
 * <h1>I am a H1 tag</h1>
 * <h2>I am a H2 tag</h1>
 * </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands) 
 */ // This Approach to create a sibling element from React Code upper example 3
const parent_sibling1 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag")
    ])
]);
// This Approach to create a sibling element from React Code upper example 2
const parent_sibling2 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
]));
// This Approach to create a nested element from React Code upper example 1
const parent_child = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am a H1 tag")));
// This Approach to create an element from React Code
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abcdfff"
}, "Hello World with React!" //this is called children
); // It is an object
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(parent_sibling1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent_sibling1);

//# sourceMappingURL=index.6bd02f5a.js.map

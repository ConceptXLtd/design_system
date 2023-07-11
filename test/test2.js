export default function Widget() {
    return React.createElement(
        "div",
        { style: { height: "100%", width: "100%", backgroundColor: "#454545" } },
        React.createElement(
            "h1",
            null,
            "Hello world"
        )
    );
}
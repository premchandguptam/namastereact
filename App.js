
const parent = React.createElement("div",  {id:"parent"},
    [
        React.createElement(
        "div",{id:"child"},
            [
            React.createElement("h1",{},"Nested Div"),
            React.createElement("h2",{},"Sibilings")
            ]
            ),

            React.createElement(
                "div",{id:"child"},
                    [
                    React.createElement("h1",{},"Nested Div"),
                    React.createElement("h2",{},"Sibilings")
                    ]
                    )
    ]
);




    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
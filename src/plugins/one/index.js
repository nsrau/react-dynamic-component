const ExampleComponent = function ExampleCompone(_ref) {
    var text = _ref.text;
    var styles = {
        color: 'white',
        backgroundColor: 'red'
    };
    return React.createElement("div", {style: styles}, "Example Component: ", text);
};
window.ExampleComponent = ExampleComponent;


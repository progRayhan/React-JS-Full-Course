// Component 1
function Heading() {
    return (
        <h1>This is a Heading</h1>
    )
}

// Component 2
function Paragraph() {
    return (
        <div>
            <p>This is a Paragraph</p>
            <p>I love Programming</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Heading />
        <Paragraph />
    </div>,
    document.getElementById("root"))
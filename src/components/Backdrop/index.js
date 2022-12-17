const removeBackdrop = () => {
    console.log('It is to be removed');
}

const Backdrop = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#c3c3c3]" onClick={removeBackdrop}>
            <h1>Hello G</h1>
        </div>
    )
}
export default Backdrop;
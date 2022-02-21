
const ItemListContainer = ({ greeting, additionalMessage }) => {
    const styleTitle = {
        fontSize: 40,
        marginTop: 20
    };
    const styleSubtitle = {
        fontSize: 28,
        marginTop: 5
    };
    return (
        <section>
            <h1 style={styleTitle}>{greeting}</h1>
            <h2 style={styleSubtitle}>{additionalMessage}</h2>
        </section>

    );
}

export default ItemListContainer;
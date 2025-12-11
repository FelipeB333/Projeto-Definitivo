function Home() {
    return (
        <>
        <h1 style={style}>Padaria Pão Crocante (ou no sul Padaria Cacetinho Crocante)</h1>
        <p style={{ color: 'yellow', backgroundColor: 'indigo'}}>Melhores pães (cacetinhos) do país.</p>
        </>
    );
    
}

const style = {
    textAlign: 'center',
    border: '0.4px solid indigo'
}
export default Home;
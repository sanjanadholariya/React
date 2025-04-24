const Quotes = ({ quotes }) => {
    return (
        <>
            <h1 align="center">QUOTES</h1>

            <div style={{display:'flex',
            flexWrap:'wrap',}}>
            {
                quotes.map((val , index) => {
                    return (
                        <div key={index} style={{
                            
                            
                            border: '1px solid #ddd',
                              borderRadius: '10px',
                              padding: '20px',
                              width: '420px',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                              margin:'20px'
                        }}>
                            <blockquote align="center" >
                                "{val.quote}"
                                <footer style={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'right' }}>-{val.author}</footer>
                            </blockquote>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Quotes;
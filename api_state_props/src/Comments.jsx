const Comments = ({ comments }) => {
    return (
        <>
        <h1 align="center">COMMENTS</h1>
            <div style={{display:'flex',flexWrap:'wrap'}}>
          
          {
              comments.map((val , index) => {
                  return (
                      <div key={index}
                          style={{
                              border: '1px solid #ddd',
                              borderRadius: '10px',
                              padding: '20px',
                              width: '259px',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                          }}>

                            <p><b>Id :- </b>{val.id}</p>
                            <p><b>Body :- </b>{val.body}</p>
                            <p><b>Post Id :-</b>{val.postId}</p>
                            <p><b>Likes :-</b>{val.likes}</p>

                      </div>
                  )
              })
          }
      </div>
        </>
    )
}
export default Comments;
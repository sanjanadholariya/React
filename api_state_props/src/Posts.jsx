const Posts = ({ posts }) => {
    return (
        <>
            <h1 align="center">POSTS</h1>
            {
                posts.map((val , index) => {
                    return (
                        <div key={index}>
                            <p><b>Id :- </b>{val.id}</p>
                            <p><b>Title :- </b>{val.title}</p>
                            <p><b>Body :- </b>{val.body}</p>
                            <p><b>Tags :- </b>{val.tags.join(',')}</p>
                            <p><b>Reactions :</b> <br /> <b>Likes</b> :-{val.reactions.likes} <br /> <b>Dislikes</b> :-{val.reactions.dislikes}</p>
                            

                            <hr /><hr /><hr /><hr />
                        </div>


                    )
                })
            }
        </>
    )
}
export default Posts;
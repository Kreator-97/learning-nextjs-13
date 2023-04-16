import type { Comments } from '../../../../interfaces'

const fetchComments = (id: string): Promise<Comments[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then( res => res.json() )
}

export default async function Comments({ params }: any) {
  const { id } = params
  const comments: Comments[] = await fetchComments(id)

  return (
    <ul style={{
      backgroundColor: '#444',
      padding: '1rem 2rem'
    }}>
      {
        comments.map((comment) => {
          return (
            <div key={ comment.id }>
              <h3>{ comment.name }</h3>
              <small>{ comment.body }</small>
            </div>
          )
        })
      }
    </ul>
  )
}



import Link from 'next/link'
import type { Post } from '../../../interfaces'

const fetchSinglePost = (id: string):Promise<Post> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then( res => res.json() )
}

export default async function SinglePostLayout ({ params, children }: any) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h2>{ post.title.toUpperCase() }</h2>
      <p>{ post.body }</p>
      <Link href={'/posts/[id]/comments'} as={`/posts/${id}/comments`}>
        Ver comentarios
      </Link>
      { children }
    </article>
  )
}

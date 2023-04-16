import { ListOfPosts } from './ListOfPosts'


export default async function PostPage () {

  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <ListOfPosts />
    </section>
  )
}

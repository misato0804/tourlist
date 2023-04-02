type Post = {
    id:string,
    title: string,
    slug: string,
    link: string
}

type City = {
    id: string,
    name: string,
    posts: Post[],
    image: string
}


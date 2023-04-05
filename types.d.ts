type Post = {
    id:string,
    title: string,
    slug: string,
    coverPhoto: {
        url: string
    },
    link: string,
    location: any,
    jpy: number,
    category: string[],
    cad: number,
    city: {
        name: string
    }
}

type City = {
    id: string,
    name: string,
    posts: Post[],
    image: string
}


export type RandomPeopleType = {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string,
        },
        city: string,
        state: string,
        country: string,
        postcode: number,
        coordinates: {
            latitude: number,
            longitude: number
        },
    },
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
}

export type RandomPeopleResultType = {
    result: RandomPeopleType[]
}

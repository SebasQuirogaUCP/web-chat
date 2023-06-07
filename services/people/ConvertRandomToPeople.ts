import { PeopleType } from "../../types/PeopleType";
import { RandomPeopleResultType } from "../../types/RandomPeopleResultType";
import { RandomPeopleType } from "../../types/RandomPeopleType";

export const ConvertRandomToPeopleType = (randomPeople: RandomPeopleType[]) => {
    const people: PeopleType[] = [];
    randomPeople.map(person => {
        people.push({
            avatar: person.picture.medium,
            email: person.email,
            name: person.name.first,
            title: person.name.last,
            phone: person.phone
        })
    })
    return people
}
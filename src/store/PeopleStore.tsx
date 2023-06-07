import { create } from "zustand"
import { People } from "../../data/people"
import { PeopleType } from "../../types/PeopleType"
import { RandomPeopleResultType } from "../../types/RandomPeopleResultType"
import { ConvertRandomToPeopleType } from "../../services/people/ConvertRandomToPeople"

type PeopleStore = {
    people: PeopleType[],
    addPerson: (person: PeopleType) => void,
    generateRandomPeople: () => void
}

export const usePeopleStore = create<PeopleStore>()((set) => ({
    people: People,
    addPerson: (person: PeopleType) => set((state) => ({ people: [...state.people, person] })),
    generateRandomPeople: async () => {
        const rawResponse: RandomPeopleResultType = await (await fetch("https://randomuser.me/api/?results=5")).json()
        console.info("RawResponse", rawResponse)
        const people = ConvertRandomToPeopleType(rawResponse.results)
        console.info("people", people)
        set({ people: people })
    }
}))
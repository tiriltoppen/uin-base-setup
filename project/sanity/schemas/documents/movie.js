const movie = {
    name: 'movie',
    title: 'Movie', 
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            description: 'Beskrivelse av tittel',
        },
        {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'movie'}],
            description: 'Beskrivelse av skuespiller',

        }
    ]
}

export default movie;
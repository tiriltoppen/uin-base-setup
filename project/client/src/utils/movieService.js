// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity
import client from './client';


const movieFields = `
_id,
title,
'actor': actor -> name
`;


export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}; 

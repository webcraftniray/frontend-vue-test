import { createClient } from 'contentful'
import fclone from 'fclone'
/**
 * * fclone - https://github.com/soyuka/fclone
 * This module clones a Javascript object in safe mode (eg: drops circular values) recursively.
 * Circular values are replaced with a string: '[Circular]'.
 */

const createContentfulClient = ({ cdaUri, spaceId, environmentId, cdaToken }) => {
    return createClient({
        host: cdaUri,
        environment: environmentId,
        space: spaceId,
        accessToken: cdaToken
    });
}

export const getBlogs = async() => {
    const runtimeConfig = useRuntimeConfig()
    const client = createContentfulClient(runtimeConfig);
    let entries = await client.getEntries()
        .then(({ items }) => {
            return items
        })
    entries = fclone(entries)

    /**
     * Last entry seems to be returning all blogs again?
     * 
     * This throws an error when destructuring data for the v-for loop as fields are not all the same,
     * so I have manually removed the last entry. Not sure if this is contentful package or data issue.
     * In a production environment this should be fixed in a better way.
     */

    /*
    entries[entries.length -1]:
    {
        fields: {
            blogs: [Array],
            avatar: [Object],
            bio: 'Head of Engineering',
            name: 'Ray Lawlor'
        },
        sys: {
            locale: 'en-US',
            contentType: [Object],
            revision: 1,
            environment: [Object],
            updatedAt: '2022-04-28T15:26:16.855Z',
            createdAt: '2022-04-28T15:26:16.855Z',
            type: 'Entry',
            id: '15nQWfTgePxFf7r14tmMJ6',
            space: [Object]
        },
        metadata: { tags: [] }
    }
    */

    entries.splice(entries.length-1, 1)

    return entries
}

export const getBlog = async({ id }) => {
    const runtimeConfig = useRuntimeConfig()
    const client = createContentfulClient(runtimeConfig);
    let entry = await client.getEntry(id)
        .then(({ fields }) => {
            return fields
        })
    entry = fclone(entry)
    return entry
}

export default {
    getBlogs,
    getBlog
}
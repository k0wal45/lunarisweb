import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemaTypes/posts'
import { tag } from './schemaTypes/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}

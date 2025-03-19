import { pageBuilderBlocks } from "./blocks"
import { definitions } from "./definitions"
import { documents, singletons } from "./documents"

// Creating a new constant 'schemaTypes' which is a copy of the 'documents' array
export const schemaTypes = [...documents, ...definitions, ...pageBuilderBlocks]

// Creating a new constant 'schemaNames' which is an array of names extracted from the 'documents' array
export const schemaNames = [...documents].map((doc) => doc.name)

// Defining a new type 'SchemaType' which is a union of all the types in the 'schemaNames' array
export type SchemaType = (typeof schemaNames)[number]

// Creating a new constant 'singletonType' which is an array of names extracted from the 'singletons' array
export const singletonType = singletons.map(({ name }) => name)

// Defining a new type 'SingletonType' which is a union of all the types in the 'singletonType' array
export type SingletonType = (typeof singletonType)[number]

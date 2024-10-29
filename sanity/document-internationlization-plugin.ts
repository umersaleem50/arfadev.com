

import {documentInternationalization} from '@sanity/document-internationalization'
import { defineField } from "sanity";


const translatedSchemaTypes = ['footer','menu','page','post','cta',"generalSettings","section"];

const supportedLanguages =  [
        {id: 'de', title: 'Deutsch (German)'},
        {id: 'en', title: 'English'}
      ]


export const documentInternationalizationPlugin = documentInternationalization({
      // Required
      // Either: an array of supported languages...
      supportedLanguages,
      // ...or a function that takes the client and returns a promise of an array of supported languages
      // MUST return an "id" and "title" as strings
      // Note: Async language configuration cannot create templates for new documents
      // supportedLanguages: (client) => client.fetch(`*[_type == "language"]{id, title}`),

      // Required
      // Translations UI will only appear on these schema types
      schemaTypes: translatedSchemaTypes,

      // Optional
      // Customizes the name of the language field
      languageField: `language`, // defauts to "language"

      // Optional
      // Keep translation.metadata references weak
      weakReferences: true ,// defaults to false

      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      bulkPublish: false, // defaults to false

      // Optional
      // Adds additional fields to the metadata document
      metadataFields: [
        defineField({ name: 'slug', type: 'slug' })
      ],

      // Optional
      // Define API Version for all queries
      // https://www.sanity.io/docs/api-versioning
      apiVersion: '2023-05-22',

      // Optional
      // Enable "manage translations" button without creating a translated version. Helpful if you have
      // pre-existing documents that you need to tie together through the metadata document
      allowCreateMetaDoc: true // defaults to false
    })

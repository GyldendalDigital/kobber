import { defineField, defineType } from 'sanity'
import { WoodWingAssetSource } from '../components/WoodWingAssetSource'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        sources: [
          {
            name: 'woodwing',
            title: 'WoodWing',
            component: WoodWingAssetSource
          }
        ],
        hotspot: true
      }
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            sources: [
              {
                name: 'woodwing',
                title: 'WoodWing',
                component: WoodWingAssetSource
              }
            ],
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            sources: [{
              name: 'woodwing',
              title: 'WoodWing',
              component: WoodWingAssetSource
            }]
          }
        }
      ]
    })
  ]
}) 
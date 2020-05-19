export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec457a4c2d4c9af55eaebd8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rzimbe9c',
                  apiId: '68e1f434-aef2-41eb-b27f-a64bc5ccfb55'
                },
                {
                  buildHookId: '5ec457a5848902a7d6f46625',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rjxede5z',
                  apiId: '17edea47-3e7b-48c1-a3b4-35ddf995479a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muravski/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rjxede5z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

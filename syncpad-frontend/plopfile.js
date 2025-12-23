export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create a reusable component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your component name?'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                template: `import React from 'react';
import './{{pascalCase name}}.css';

const {{pascalCase name}} = () => {
  return (
    <div className="{{kebabCase name}}">
      {{pascalCase name}} Component
    </div>
  );
};

export default {{pascalCase name}};
`
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
                template: `.{{kebabCase name}} {
  display: block;
}
`
            }
        ]
    });
};

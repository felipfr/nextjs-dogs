<div align="center">

<img src="https://raw.githubusercontent.com/felipfr/nextjs-dogs/master/public/img/logo.png">

[![Powered by Vercel](https://raw.githubusercontent.com/felipfr/nextjs-dogs/1658a21f4a5c1bda5536350d9a202a9cb32a3a9b/src/Assets/powered-by-vercel.svg)](https://vercel.com/)

</div>

# Next.js + Dogs

O projeto original foi desenvolvido pela Origamid usando o "Create React App". Neste fork, baseado no Next.js 13, aproveitei os recursos de SSR e algumas das novas funcionalidades, como a pasta "app" e o sistema de roteamento aprimorado. Também está sendo utilizado o serviço de continuous deployment (CD) na Vercel.

## Aprendizados

A migração do "Create React App" para o Next.js 13 me permitiu entender as vantagens do Server-Side Rendering (SSR) em relação a Single-Page Applications (SPAs), como melhoria de desempenho, otimização para mecanismos de busca e melhor experiência do usuário. O maior desafio foi adaptar as diferenças entre as duas estruturas e a aplicar de acordo com as necessidades do Next.js. Isso envolveu alterações em metadata, componentes, imagens, links e principalmente o sistema de roteamento. Além disso, utilizei o serviço de continuous deployment da Vercel, que automatizou o processo de implantação, permitindo que eu me concentrasse apenas no processo de desenvolvimento.

## Funcionalidades

- Cadastro de usuário
- Postagem de fotos, com opção de delete
- Feed de fotos com scroll infinito e quantidade de visualizações
- Criação de comentários
- Página de estatísticas com informações de todas as suas postagens

## Em Breve

- Redux: Para ajudar no gerenciamento de estado dos componentes
- API: Uma nova API própria, independente de terceiros

## Stack Utilizada

**Front-end:** Next.js, React e CSS Modules

**Back-end:** Wordpress REST Api com JSON Web Token

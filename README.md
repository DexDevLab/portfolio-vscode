<h1 align="center">portfolio-vscode</h1>
<p align=center><i align="center"> Portfólio de Desenvolvedor no estilo visual do VSCode, baseado em um projeto do Desenvolvedor <a href="https://github.com/itsnitinr/vscode-portfolio">Nitin Ranganath</a></i></p>

<br>

<div align="center">

<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-6DA55F?style=plastic&logo=node.js&logoColor=white" height="20" alt="NodeJS"></a>
<a href="https://reactjs.org"><img src="https://img.shields.io/badge/react-black?style=plastic&logo=react&logoColor=white" height="22" alt="ReactJS"></a>
<a href="https://vercel.com"><img src="https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white" height="22" alt="Vercel"></a>

<a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=plastic&logo=css3&logoColor=white" height="20" alt="CSS3"></a>
<a href="https://html.com"><img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white" height="20" alt="HTML5"></a>
<a href="https://www.javascript.com"><img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E" height="20" alt="JavaScript"></a>

<a href=""><img src="https://img.shields.io/github/languages/code-size/dexdevlab/portfolio-vscode?style=plastic" height="20" alt="CodeSize"></a> <a href=""><img src="https://img.shields.io/github/repo-size/dexdevlab/portfolio-vscode?style=plastic" height="20" alt="RepoSize"></a>
<a href=""><img src="https://img.shields.io/github/last-commit/dexdevlab/portfolio-vscode?style=plastic" height="20" alt="LastCommit"></a>

<a href="https://github.com/dexdevlab/portfolio-vscode/fork"><img src="https://img.shields.io/github/forks/dexdevlab/portfolio-vscode?style=plastic" height="20" alt="Fork"></a>
<a href=""><img src="https://img.shields.io/badge/version-1.2.0-005bff?style=plastic" height="20" alt="Version"></a>
<a href="https://github.com/dexdevlab/portfolio-vscode/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dexdevlab/portfolio-vscode?&style=plastic" height="20" alt="License"></a>

|| [Stack](#section-stack) || [Primeiros Passos](#section-primeirospassos) ||  [Notas de versão](#section-changelog) ||

|| [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) ||

</div>

<hr>

<p>Este projeto inclui melhorias funcionais e maior personalização, permitindo facilmente que qualquer desenvolvedor possa usá-lo com maior liberdade para exibir seus portfólios. Abaixo seguem algumas características:</p>

- **Personalização por um único arquivo:** A utilização do arquivo de configuração para personalizar todo o projeto facilita e centraliza customizações que não envolvam estilizações estruturais nos componentes.

- **Maior responsividade:** A responsividade de quase todos os componentes foi revisada, permitindo maior legibilidade e fluidez no design para dispositivos menores, bem como a integração parcial ao conceito "mobile first".

- **Tema adicional:** Inclusão do Tema do VsCode [Raimei Shadow 2064](https://vscodethemes.com/e/rryandev.raimeishadow/raimei-shadow-2064?language=javascript).

- **Remoção de inconsistências:** Adoção de melhores práticas em estruturas de componentes e manipulação de variáveis.

- **Melhorias de Interface:** Explorador de pastas mais semelhante ao VSCode, com diretórios expansíveis e arquivos com melhor comportamento visual, de acordo com as páginas configuradas.

<a name="section-stack">

## Stack

</a>

- **Tipo de Software:** Aplicação Web Dinâmica
- **Linguagem Principal:** [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Linguagem de Marcação:** [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- **Linguagem de Estilização:** [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- **Framework Principal:** [React](https://reactjs.org)
- **Framework Backend:** [Node.js](https://nodejs.org/en/)
- **Plataforma de Publicação:** [Vercel](https://vercel.com)
- **Arquiteturas:** MVC, Web API

<hr>

<a name="section-primeirospassos">

## Primeiros passos

</a>

### Clonando o repositório

1 - Faça um git clone ou o download do repositório, da forma que preferir

`git clone https://github.com/dexdevlab/portfolio-vscode.git`

2 - Instale um gerenciador de pacotes (preferencialmente yarn) utilizando um terminal no diretório raiz do repositório clonado

`yarn` ou `npm install`

### Configurando as variáveis de ambiente

Para o funcionamento adequado do projeto, crie um arquivo chamado `.env.local` com as seguintes variáveis:

| Variável                      | Descrição                                                                                                                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `NEXT_PUBLIC_API_URL`         | Endereço de execução do servidor backend. Se em ambiente local, usará `http://localhost:3000/api`                               |
| `NEXT_PUBLIC_DEV_TO_API_KEY`  | Chave API de conexão para a rede Dev.to, necessário para apresentar as informações da página "articles"                         |
| `NEXT_PUBLIC_GITHUB_API_KEY`  | Chave API de conexão para a API de dados de repositório do Github, necessário para apresentar as informações da página "github" |
| `NEXT_PUBLIC_GITHUB_USERNAME`  | Nome de usuário do perfil Github  |
| `NEXT_PUBLIC_NOTION_API_TOKEN`  | Chave API do Notion, necessário para utilizar formulários de contato da página "contact"  |
| `NEXT_PUBLIC_NOTION_DATABASE_ID`  | ID de Banco de Dados Notion, necessário para utilizar formulários de contato da página "contact"  |

### Configurando portfolioSettings.js

No diretório `utils`, configure o arquivo `portfolioSettings.js` conforme desejar. A seção abaixo apresenta descrições dos objetos contidos no arquivo.

<br>

#### Configurações Principais

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `titleBarTag`                  | Texto exibido na barra de título da janela do VSCode. |
| `repoLocation`                 | Localização da sua cópia do repositório do Portfólio VSCode. |
| `useTitleTag`                  | Se definido para `true`, usará `titleBarTag` como título em todas as páginas acessadas no portfólio. Caso contrário, o nome da página do portfólio aparecerá no título da janela do VSCode. |
| `projectName`                  | Nome do projeto. É exibido como o nome da pasta raiz do Explorer. |
| `devName`                      | Nome a ser exibido como header na página de início do repositório (página `home`). |
| `devDescription`               | Descrição do nome do desenvolvedor na página de início do repositório (página `home`). |

<br>

#### `portfolioSettings.contentGithub`

Esse objeto define personalizações a respeito da página `github` e seu conteúdo.

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `enabled`       | Se definido como `false`, remove da exibição a página `github`. |
| `limitRepos`    | Organiza e limita a quantidade de repositórios a exibir na página `github`, baseado no número inteiro informado. |
| `showForkRepos` | Se definido como `false`, não serão exibidos repositórios que são forks de repositórios de outros usuários. |
| `calendarTheme` | Define o tema de cores a ser usado no calendário de atividade do Github. Aceita 5 níveis de cor (level0, level1, level2, level3 e level4) em hexadecimal. |

<br>

#### `portfolioSettings.contentProjects`

Esse objeto define personalizações a respeito da página `projects` e seu conteúdo.

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `enabled`       | Se definido como `false`, remove da exibição a página `projects`. |
| `projects`    | Enumera os projetos, os quais serão exibidos como cards. Possui as seguintes propriedades: `id` - O ID do card; `name` - O nome do projeto; `image` - Imagem de miniatura como referência do projeto; `tags` - Tags para serem utilizadas como referências do projeto; `source_code` - Link para o repositório do código-fonte do projeto; `demo` - URL do endereço de teste em tempo real do projeto. |

<br>

#### `portfolioSettings.contentArticles`

Esse objeto define personalizações a respeito da página `articles` e seu conteúdo.

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `enabled`       | Se definido como `false`, remove da exibição a página `articles`. |
| `devToProfileUrl`    | Link do perfil Dev.to para exibição. |

<br>

#### `portfolioSettings.contentContact`

Esse objeto define personalizações a respeito da página `contact` e seu conteúdo.

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `enabled`       | Se definido como `false`, remove da exibição a página `contact`. |
| `showContactForm`    | Se definido como `false`, remove da exibição o formulário de contato. |
| `socials`    | Compreende a lista das formas de contato a serem exibidas. Possui as seguintes propriedades: `social` - nome da rede social ou forma de contato a ser exibido; `link` - descrição da rede social ou forma de contato; `href` - link href (onclick) a ser executado ao clicar na descrição da rede social ou forma de contato. |

<br>

#### `portfolioSettings.headMetadata`

Esse objeto define dados de metadata HTML para compor o site em produção. As informações são carregadas no Componente `Head.jsx`

| Objeto                         | Descrição                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------|
| `titleTag`       | meta "title" |
| `description`    | meta "description" |
| `keywords`    | meta "keywords" |

<br>

### Executando o projeto

Execute `yarn dev` ou `npm run dev` para executar o projeto. O site estará aberto em  `https://localhost:3000`. Você pode alterar a porta padrão inserindo o argumento `next dev -p XXXX`, substituindo XXXX pelo número de porta desejado, em `package.json`, na propriedade "scripts".

**Lembre-se de executar `yarn build` ou `npm run build` para buildar o projeto corretamente para ser utilizado em produção se necessário.**

### Distribuindo e publicando seu portfólio

Você pode utilizar o Vercel e sua importação direta com o Github para publicar online seu projeto. Para mais informações, consulte a [documentação](https://vercel.com/new) do Vercel.

<hr>

<a name="section-changelog">

## Notas de versão

</a>

### v1.2.0-230220

- Melhorada responsividade da página Github
- Removido SVG da página Index
- Adicionada configuração que permite exibir ou não repositórios que são forks de outros

### v1.1.1-230219

- Resolvido bug onde o Tema Github Dark não estava sendo aplicado
- Alterada a disposição e altura mínima dos cards de repositório
- Resolvido bug onde links desativados continuavam funcionando

### v1.1.0-230213

- Conteúdo da página "about" agora inserido dentro do Componente de mesmo nome para melhor responsividade
- Criado componente de Badge para inserir badges do Github

### v1.0.1-230213

- Validação das fontes para funcionamento no Vercel
- Criação de _document.js para inclusão de metadados HTML, incluindo as fontes
- Resolvido erro de layout da disposição de temas na página "settings"
- Adição da biblioteca sharp para otimização de imagens para o Next.js

### v1.0.0-230210

- Criação do arquivo de configuração para personalização do projeto
- Criação de documentação para facilitar o uso do repositório
- Correção de bugs relacionados a componentização do React
- Modificação de componentização recursiva de certos elementos
- Implementação de boas práticas na elaboração de componentes
- Ajuste na responsividade e mudança de padrão de design para "mobile first"

<hr>

<a name="section-autores">

## Autores

</a>

<a href="https://github.com/dexdevlab/portfolio-vscode/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dexdevlab/portfolio-vscode" />
</a>

<hr>

<a name="section-contato">

## Contato

</a>

Se você gostou desse projeto, nos dê uma <a href="https://github.com/dexdevlab/portfolio-vscode" data-icon="octicon-star" aria-label="Star dexdevlab/portfolio-vscode on GitHub">estrela</a>. <br>
Para contato, envie um email a: <a href="mailto:dex.houshi@hotmail.com">dex.houshi@hotmail.com</a>

<hr>

<a name="section-licenca">

## Licença

</a>

Licenciado sob a [MIT License](https://github.com/dexdevlab/portfolio-vscode/blob/main/LICENSE).

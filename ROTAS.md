# React and Next

SSR -> Server Side Rendering
CSR -> Client Side Rendering

## Routes

- Static -> SSG -> Página estática no cache <- Temos HTML pronto do cliente
  -> Não precisa buscar nada no servidor

- Dynamic -> Nada pronto -> É necessário fazer buscas no servidor

- ISR <- Incremental Static Regeneration (Static | Dynamic)
  - / <- Static -> Depois de 60s quero atualizar o conteúdo dela
  - / <- Static -> Depois que eu atualizar alguma coisa, ela atualiza

## Tipos de rotas

./ => (pública)
./post/[slug] => (pública)

./admin/login (dynamic) - fazer login do usuário

./admin/post => (privado - dynamic) => Ler (r) lista de posts | deletar (d) (crud)
./admin/post/[id] => (privado - dynamic) => Atualizar (u) update
./admin/post/new => (privado - dynamic) => Criar novo post (c)

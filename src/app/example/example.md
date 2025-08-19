# Types of cache

| Mecanismo               | Onde              | O que faz

--------------------------------------------------------------------------------

| **Request Memoization** | Memória do render | Evita repetições dentro da mesma
                                                requisição (cache HIT/MISS).
 => Desduplicar a árvore do react (ex.: /src/libs/post/queries.ts) - uma vez
 feita a chamada, não será necessário chamá-la de novo. A vida dela acaba quando
 a requisição termina. termina com o ciclo de vida da requisição.

--------------------------------------------------------------------------------

| **Data Cache**          | No servidor       | Persiste resultados de `fetch`
                                                entre requisições.
 => Mas voltado para dados/ persiste mas pode ser revalidado

--------------------------------------------------------------------------------

| **Full Route Cache**    | No servidor       | Armazena HTML gerado inteiro
                                                para renderizações.
 => Reduz o tempo de renderização | otimiza performance (persistente e pode ser
 revalidada)

--------------------------------------------------------------------------------

| **Router Cache**        | No cliente        | Cache do payload da rota para
                                                navegação rápida.

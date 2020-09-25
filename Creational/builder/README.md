BUILDER
Separar a construção de um objeto complexo da sua representação
de modo que ao mesmo processo de construção possa criar diferentes representações

Visão geral do Builder
O padrão sugere a separação do codigo que cria e o codigo que usa o objeto
Separação de objetos muito complexos
  -Construtores muito complexos
  -Composição de varios objetos
  -Algoritmo de criação de objecto complexo
Permite a criação de um objeto em etapas
O objecto final pode variar de acordo com a necessidade

Positivo
- Separa criação de utilização
- O cliente não precisa criar objetos diretamente
- O mesmo código pode construir objetos diferentes
- Ajuda na aplicação dos principios SRP e OCP.

Negativos
- O código final pode ser tornar muito complexo

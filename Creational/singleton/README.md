SINGLETON
Garantir que uma classe tenha somente uma instancia no
programa e fornecer um ponto de acesso global para a mesma.

Somente uma instancia ?
Geralmente usado para acesso a recursos compartilhados
Ex: Acesso a base de dados, interfaces graficas, sistema de arquivos  

Aplicabilidade
Use o singleton quando um classe precisar ter somente uma instancia
disponivel em todo o seu programa

Positivo
- Acesso controlado a instancia unica
- É facil permitir um numero maior de instancias, caso mude de ideia
- Use lazy instantiation, O singleton só é criado no momento do uso
- Substitui variaveis globais

Negativo
- É mais dificil de testar
- Viola o principio de resposabilidade unica
- Requer tratamento especial em casos de concorrencia
- Erich Gamma(autor) o unico padrão que ele removeria se fosse refatorar o livro

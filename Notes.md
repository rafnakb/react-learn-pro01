# Programação imperativa
O que deve ser feito passo-a-passo.

Exemplo: Receita de bolo

# Programação declarativa (React)
Quais as condições para eu ter o resultado final.

# "Estado" useState
Sempre importante inicialiar o useState com o mesmo tipo de informação que será manipulada.

# Key no React
A - Porque única?
Existem 3 momentos em que um componente é renderizado novamente no React.
  1. Quando o estado altera.
  2. Quando a propriedade altera.
  3. Quando um componente pai renderiza novamente. 

O componente "lê" os componentes já renderizados através da Key, ou seja, o que está e o que não está em tela.
Dessa maneira ele otimiza a renderização do componente único.

XXX => Não usar o índice do Array como chave. (Fianl da aula entendendo a Key).

# Imutabilidade
As variáveis não sofrem mutação. É criado um novo valor (um espaço na memória).

# Diferença na chamada da função?
```js

onClick={handleDeleteComment}
onClick={handleDeleteComment()}

```

# Closures no React
Sempre ao atualizar um valor que dependa de seu valor anterior, recomenda-se usar o padrão abaixo:

```js
function handleLikeComment() {
  
  setLikeCount((state) => {
    return state + 1;
  });

}

```
Veja o código aplicado no componente de Comment.jsx no botão de likes.
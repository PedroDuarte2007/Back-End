# Factory Method 
## Abstract Factory

O padrão Abstract Factory é um padrão de projeto criacional que fornece uma interface para criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas.

## Padrão de Projeto Abstract Factory Method

O padrão Abstract Factory Method é uma variação do padrão Factory Method que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses decidam qual classe instanciar. Ele é usado quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

## Caracteristicas do padrão Abstract Factory Method

- Cria famílias de objetos relacionados ou dependentes entre si.
- Permite que as subclasses decidam qual classe instanciar.
- Fornece uma interface para criar objetos em uma superclasse.
- É usado quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

## Exemplo de implementação do padrão Abstract Factory Method em JavaScript

```js
// Interfaces (em JS usamos classes base)
class Cadeira {
  sentar() {
    throw new Error("Método 'sentar()' deve ser implementado.");
  }
}

class Sofa {
  deitar() {
    throw new Error("Método 'deitar()' deve ser implementado.");
  }
}

// Implementações concretas
class CadeiraModerna extends Cadeira {
  sentar() {
    console.log("Sentando em uma cadeira moderna");
  }
}

class SofaModerno extends Sofa {
  deitar() {
    console.log("Deitando em um sofá moderno");
  }
}

// Fábrica abstrata
class FabricaDeMoveis {
  criarCadeira() {
    throw new Error("Método 'criarCadeira()' deve ser implementado.");
  }

  criarSofa() {
    throw new Error("Método 'criarSofa()' deve ser implementado.");
  }
}

// Fábrica concreta
class FabricaModerna extends FabricaDeMoveis {
  criarCadeira() {
    return new CadeiraModerna();
  }

  criarSofa() {
    return new SofaModerno();
  }
}

// Cliente
function cliente() {
  const fabrica = new FabricaModerna();
  const cadeira = fabrica.criarCadeira();
  const sofa = fabrica.criarSofa();

  cadeira.sentar();
  sofa.deitar();
}

// Executar o cliente
cliente();
```

## Imagem de exemplo do padrão Abstract Factory Method

![Abstract Factory Method](https://refactoring.guru/images/patterns/content/abstract-factory/abstract-factory-en-3x.png)

![Abstract Factory Method](https://refactoring.guru/images/patterns/diagrams/abstract-factory/problem-pt-br.png?id=98a0309f5f32f1636a423aa9c979595d)

## Em qual situação usar o padrão Abstract Factory Method?

- Quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.
- Quando um sistema deve ser configurado com uma ou mais famílias de produtos.
- Quando você deseja fornecer uma biblioteca de classes que não precisa conhecer as classes concretas que usa.
- Quando você deseja fornecer uma interface para criar objetos em uma superclasse, mas permitir que as subclasses decidam qual classe instanciar.

## Pontos positivos do padrão Abstract Factory Method

- Permite criar famílias de objetos relacionados ou dependentes entre si.
- Facilita a adição de novos produtos sem modificar o código existente.
- Promove a consistência entre os produtos criados.
- Aumenta a flexibilidade e a reutilização do código.

## Pontos negativos do padrão Abstract Factory Method

- Pode aumentar a complexidade do código, especialmente se houver muitas classes concretas.
- Pode dificultar a compreensão do código, pois o cliente não sabe exatamente qual classe concreta está sendo instanciada.
- Pode levar a um aumento no número de classes, o que pode tornar o código mais difícil de manter.
- Pode ser mais difícil de implementar do que o padrão Factory Method simples, especialmente se houver muitas variações de produtos.


## Sua criação e evolução

O padrão Abstract Factory foi introduzido por primeira vez no livro "Design Patterns: Elements of Reusable Object-Oriented Software" de Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, publicado em 1994. O padrão foi criado para resolver o problema de criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas.
O padrão evoluiu ao longo do tempo, com a inclusão de novas variações e implementações em diferentes linguagens de programação. Ele se tornou um dos padrões de projeto mais populares e amplamente utilizados na programação orientada a objetos, especialmente em sistemas que requerem flexibilidade e extensibilidade.

## Conclusão

O padrão Abstract Factory é uma ferramenta poderosa para criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas. Ele promove a flexibilidade, a reutilização do código e a consistência entre os produtos criados. No entanto, deve ser usado com cautela, pois pode aumentar a complexidade do código e dificultar a compreensão do mesmo. É importante avaliar se o uso desse padrão é apropriado para o seu projeto específico.
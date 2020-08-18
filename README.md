# curso-spring-ionic-frontend
Primeiro projeto ionic

Após baixar o projeto em sua maquina, é necessário baixar as dependencias antes de executa-lo.

> Digite o código no cmd:
 ``` npm install```

> Para executar o projeto ionic:
``` ionic serve ```

> Para criar novos componentes(paginas) com extrutura ionic:
``` ionic generate page categorias ```

> Caso queira abrir o VisualStudio Code via codigo digite o seguinte codigo:
``` code . ```

## Dicas:
Documentação Ionic completa:
https://ionicframework.com/docs/

Documentação Ionic CLI
- https://ionicframework.com/docs/v3/cli/generate/

Ionic Icones:
- https://ionicons.com/

Ionic Components:
- https://ionicframework.com/docs/components

## localStorage:

- O local storage é um recurso do HTML 5 que é similar ao sessionStorage, porém a diferença é que, enquanto os dados armazenados no localStorage não expiram, os dados no sessionStorage tem seus dados limpos ao expirar a sessão da página. 

 > Para retornar o valor (string) correspondente à chave, ou null caso a chave não exista utilize o código abaixo:
``` localStorage.getItem("chave") ```

> Para remover o item do localStorage, caso ele exista:
``` localStorage.removeItem("chave") ```

> Para definir um item no localStorage com a chave e valor dados:
``` localStorage.setItem("chave", "valor") ```

> Código para instalar biblioteca para manipular token jwt:
```o npm install --save angular2-jwt ```

> Caso ocorra erro de typescript (Cannot find module '@angular/http'): 
```npm install @angular/http@latest. ```

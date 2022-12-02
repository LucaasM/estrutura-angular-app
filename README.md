# Exemplo estrutura angular

Este repositorio é um exemplo de uma aplicação `Angular` baseada em módulos.

Onde está dividida na seguinte maneira: 

- ``Core``: Está presente nossas classes de serviços e módulos singleton que serão usados no aplicativo mas só são importados uma vez. Por exemplo: Serviço de autenticação, serviço de localstorage, também módulos como HttpClientModule, etc. Ressaltando que o CoreMódule é importado apenas no AppModule (módulo raiz da aplicação)

- ``Shared``: O módulo shared é composto por componentes, diretivas e pipes que são utilizados por todo a aplicação angular, resumindo nesse módulos estará presente toda a parte reutilizavel do aplicativo angular. Normalmente também importamos o FormModules ou ReactModules e até outros módulos que serão reutilizaveis. O shared é importado pelos módulos de features.

- ``Feature``: Nesse módulo abrigamos a maior parte dos recursos de nossa aplicação angular, está presente toda a funcionalidade do seu sistema. Por exemplo: É um sistema de cadastro de cliente teriamos aqui components de listagem dos clientes, cadastro, alteração e etc.
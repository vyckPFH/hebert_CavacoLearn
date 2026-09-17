# Tabela de requisitos funcionais

| Identificador | Nome | Descrição |
| :---: | :--- | :--- |
| RF001 | Realizar Cadastro | Permite criar uma conta no sistema. |
| RF002 | Realizar Login | Permite autenticar o usuário. |
| RF003 | Realizar Logout | Permite encerrar a sessão do usuário. |
| RF004 | Visualizar Perfil | Exibe as informações do perfil. |
| RF005 | Editar Perfil | Permite alterar os dados do perfil. |
| RF006 | Excluir Conta | Permite remover definitivamente um usuário do sistema. |
| RF007 | Gerenciar Níveis | Permite cadastrar, visualizar, deletar e editar um nível. |
| RF008 | Gerenciar Tópicos | Permite cadastrar, visualizar, deletar e editar um tópico. |
| RF009 | Gerenciar Exercícios | Permite cadastrar, visualizar, deletar e editar um exercício. |
| RF010 | Gerenciar Músicas | Permite cadastrar, visualizar, deletar e editar uma música. |
| RF011 | Estudar Tópico | Permite acessar o conteúdo de um tópico. |
| RF012 | Realizar Exercício | Permite acessar o conteúdo de um exercício. |
| RF013 | Concluir Tópico | Registra a conclusão do tópico. |
| RF014 | Concluir Exercício | Registra a conclusão do exercício. |
| RF015 | Visualizar Missões | Exibe as missões a serem concluídas. |
| RF016 | Resgatar Pontos | Permite coletar pontos das missões. |
| RF017 | Visualizar Músicas | Exibe as músicas desbloqueadas pelo usuário. |
| RF018 | Estudar Música | Permite acessar o conteúdo de uma música. |
| RF019 | Visualizar Progresso | Exibe o progressso do usuário no curso. |
| RF020 | Visualizar Pontuação | Exibe a pontuação acumulada pelo usuário. |
| RF021 | Definir Ordem dos Itens | Permite definir a ordem dos tópicos e exercícios em um nível. |
| RF022 | Visualizar usuários | Exibe todos os usuários cadastrados no sistema. |

<br>
<br>

# Tabela de requisitos não funcionais

| Identificador | Nome | Descrição |
| :--- | :--- | :--- |
| RNF001 | Aplicação Mobile | O aplicativo do aluno deve funcionar em dispositivos Android. |
| RNF002 | Painel Administrativo Web | O site do administrativo deve funcionar no navegador. |
| RNF003 | Persistência Relacional | Os dados do sistema devem ser armazenados em um banco de dados relacional. |
| RNF004 | Renderização Dinâmica | O aplicativo deve ser capaz de renderizar dinamicamente diferentes tipos de componentes de conteúdo. |
| RNF005 | API REST | A comunicação entre os usuários e o servidor deve ocorrer por meio da API REST. |
| RNF006 | Disponibilidade Offline | Conteúdos previamente baixados devem permanecer acessíveis sem conexão com a internet. |
| RNF007 | Escalabilidade | O sistema deve permitir a inclusão de novos conteúdos sem a necessidade de atualização do aplicativo. |

<br>
<br>

# Tabela de regras de negócio

| Identificador | Nome | Descrição |
| :--- | :--- | :--- |
| RN001 | Perfil Único | Todo usuário deve possuir apenas um perfil associado. |
| RN002 | Login Obrigatório | Apenas usuários autenticados podem acessar os conteúdos do aplicativo. |
| RN003 | Nome de Usuário Único | Não é permitido o cadastro de dois usuários com o mesmo nome. |
| RN004 | Estrutura do Curso | Cada nível deve possuir pelo menos um tópico ou exercício associado. |
| RN005 | Ordem de Aprendizagem | Os tópicos e exercícios de um nível devem ser apresentados na ordem definida pelo administrador. |
| RN006 | Estudo do Conteúdo | Ao acessar um tópico, exercício ou música, o aplicativo deve renderizar o conteúdo correspondente. |
| RN007 | Conteúdo Obrigatório | Todo tópico, exercício e música deve ter um conteúdo associado. |
| RN008 | Registro de Conclusão | A conclusão de tópicos e exercícios deve ser registrada individualmente para cada usuário. |
| RN009 | Atualização do Progresso | O progresso do usuário deve ser atualizado sempre que um tópico ou exercício for concluído. |
| RN010 | Pontuação | A pontuação do usuário somente poderá ser incrementada após o resgate da recompensa de uma missão concluída. |
| RN011 | Conclusão de Missões | A conclusão das missões deve ser identificada pelo aplicativo a partir das ações realizadas pelo usuário. |
| RN012 | Resgate de Pontos | Os pontos de uma missão poderão somente ser resgatados após sua conclusão. |
| RN013 | Resgate Único | Os pontos de uma mesma missão podem ser resgatados uma única vez por usuário. |
| RN014 | Desbloqueio de Músicas | O acesso a novas músicas deve ocorrer automaticamente quando o usuário atender aos critérios de desbloqueio definidos pelo sistema. |
| RN015 | Controle de Acesso às Músicas | O usuário somente poderá visualizar ou estudar músicas que já tenham sido desbloqueadas. |
| RN016 | Progressão Individual | O progresso, pontuação, missões concluídas e músicas desbloqueadas pertencem exclusivamente ao usuário que as conquistou. |
| RN017 | Exclusão da Conta | Remove permanentemente o cadastro do usuário e seus registros do sistema. |
| RN018 | Permissão Administrativa | Apenas administradores podem cadastrar, editar ou excluir níveis, tópicos, exercícios e músicas. |
| RN019 | Alteração da Estrutura | Alterações realizadas pelo administrador devem ser refletidas na estrutura do curso disponibilizada aos alunos. |
| RN020 | Progressão Pedagógica | Os conteúdos devem ser organizados em uma sequência progressiva de aprendizagem. |
| RN021 | Integração Teoria e Prática | Os conteúdos podem combinar diferentes recursos didáticos em uma mesma sequência de aprendizagem. |
| RN022 | Renderização do Conteúdo | A ordem dos blocos cadastrada pelo administrador deve ser preservada durante a exibição do conteúdo. |
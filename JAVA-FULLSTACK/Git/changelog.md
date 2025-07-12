# Como fazer um bom changelog?
## Princípios fundamentais
- Changelogs são para humanos, não máquinas.
- Deve haver uma entrada para cada versão.
- Alterações do mesmo tipo devem ser agrupadas.
- Versões e seções devem ser vinculáveis (com links).
- A versão mais recente vem em primeiro lugar.
- A data de lançamento de cada versão é exibida.
- Mencione se você segue o versionamento semântico.
## Tipos de mudanças
- Added/Adicionado para novos recursos.
- Changed/Modificado para alterações em recursos existentes.
- Deprecated/Obsoleto para recursos que serão removidos nas próximas versões.
- Removed/Removido para recursos removidos nesta versão.
- Fixed/Corrigido para qualquer correção de bug.
- Security/Segurança em caso de vulnerabilidades.

## Padroes de nomeclatura para mensagens em commits
## Chore - pequena tarefa
- git commit -m "chore: removendo arquivos.txt"

## Fix - correçoes
- git commit -m "fix: correçao no calculo de media"

## Feat - inclusao de funcionalidade
- git commit -m "feat: inclusao de funcao para calcular media"

## Docs - atualizaçao de documentaçao
- git commit -m "docs: atualizando o changelog.md"
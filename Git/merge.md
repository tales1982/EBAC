## Git Merge
O comando git merge é usado para combinar as alterações de uma branch com outra, 
criando um novo commit que representa a fusão das duas branches. 
Aqui está um pequeno resumo de como usar o git merge:

## Certifique-se de estar na branch de destino: 
Antes de iniciar o merge, verifique se você está na branch
para a qual deseja trazer as alterações de outra branch. 
Por exemplo, se você deseja trazer as alterações da branch feature para a branch main,
verifique se está na branch main.

## Execute o comando git merge: 
Utilize o seguinte comando para fundir as alterações da branch de origem na branch de destino:

- git merge <branch_de_origem>
Por exemplo, para mesclar as alterações da branch feature na branch main, você usaria:

- git merge feature
Resolva conflitos (se houver): Se houver conflitos entre as alterações da branch de origem e da branch de destino,
o Git mostrará os arquivos com conflitos. Você precisará editar esses arquivos manualmente para resolver os conflitos. 
Após resolver os conflitos, adicione os arquivos alterados com git add e faça o commit para concluir o merge.

Conclua o merge: Após resolver os conflitos (se houver), basta fazer o commit para concluir o merge:

- git commit -m "Merge <branch_de_origem> into <branch_de_destino>"
Realize o push (se necessário): Se a branch de destino for uma branch remota, 
você precisará fazer o push das alterações para atualizar o repositório remoto:

- git push origin <branch_de_destino>
Lembre-se de que é sempre uma boa prática manter seu repositório atualizado e sincronizado com o repositório remoto
antes de realizar um merge, para evitar conflitos desnecessários. Para isso, use git pull para buscar as alterações
do repositório remoto antes de realizar o merge.
# Crie um token de acesso pessoal:

Acesse as configurações da sua conta no GitHub.
Vá para "Settings" (Configurações) > "Developer settings" (Configurações de desenvolvedor) > "Personal access tokens" (Tokens de acesso pessoal).
Clique em "Generate token" (Gerar token).
Selecione as permissões necessárias para o seu caso (pelo menos "repo" para repositórios privados ou "public_repo" para repositórios públicos).
Copie o token gerado.
Atualize a URL do repositório remoto:

Abra o terminal.

Navegue até o diretório do seu repositório Git.

Execute o seguinte comando, substituindo <seu-token> pelo token que você gerou:

bash
Copy code
git remote set-url origin https://<seu-token>@github.com/tales1982/NOME-DO-REPOSITORIO.git

toda veis que criar um repositorio tenho que adcionar um novo tokem
ou quando mudar de computador.

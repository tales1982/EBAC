type aluno = {
    nome: string;
    cursos?: string[];//Opcional (?)
    idade: number;
}

const alunos: aluno[] = [
    {
        nome:'Carlos',
        cursos: ['Front-end','UX/UI'],
        idade: 27
    },
    {
        nome:'Ana',
        cursos: ['Front-end','Python'],
        idade: 27
    }

]

alunos.push({
    nome:'Tales',
    cursos: ['FullStack'],
    idade: 40
})

//posso adciona um abjeto tambem que vai receber as mesma propriedades do aluno
const novoAluno:aluno = {
    nome: 'Thomas',
    idade: 2
}

//posso criar uma funcao que recebe como parametro as propriedades de aluno
function exibirAlunos(aluno:aluno){
    console.log(`NOME DO ALUNO :${aluno.nome}`)
}

exibirAlunos(novoAluno)

console.log(alunos)
console.log(novoAluno)
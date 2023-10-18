const alunoseBAC = [
    { nome: 'Alice', nota: 5 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Carol', nota: 6 },
    { nome: 'David', nota: 4 },
    { nome: 'Eva', nota: 4 },
    { nome: 'Theo', nota: 10 },
    { nome: 'Alex', nota: 8 },
    { nome: 'Adria', nota: 9 },
    { nome: 'Thomas', nota: 10 },
  ];
  
  function filtraAlunos() {
    alunoseBAC.forEach(function(aluno) {
      if (aluno.nota >= 6) {
        console.log(`Aluno(a): ${aluno.nome} , Nota: ${aluno.nota}`);
      }
    });
  }
  
  filtraAlunos();
  

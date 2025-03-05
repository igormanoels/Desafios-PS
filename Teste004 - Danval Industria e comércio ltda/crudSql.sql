-- 1) 
INSERT INT Funcionarios (Nome, Cargo, Salario, DepartamentoID)
VALUES ('Novo Funcionario', 'Analista', null, 10);


--2) 
UPDATE 
    Funcionario
SET 
    Salario = 8000
WHERE
    FuncionarioID = 45;


--3)
SELECT 
    F.Nome, F.Cargo, F.Salario, D.NomeDepartamento, D.GerenteID
FROM 
    Funcionarios F JOIN Departamentos D ON F.DepartamentoID = D.ID
WHERE
    F.FuncionarioID = 45;
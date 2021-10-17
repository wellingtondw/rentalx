**RF** => Requisitos Funcionais
**RNF** => Requisitos Não Funcionais
**RN** => Regras de Negócio

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado como disponível por padrão.
Somente usuários com o papel de administrador pode realizar o cadastro.

# Listagem de carros

**RF**
Deve ser possível listar os carros cadastrados.
Deve ser possível listar todos os carros cadastrados pela categoria.
Deve ser possível listar todos os carros cadastrados pela marca.
Deve ser possível listar todos os carros cadastrados pelo nome.

**RN**
Somente deve ser listado os carros que estejam disponíveis.
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro inexistente.
Não deve ser possível cadastrar uma especificação para o mesmo carro.
Somente usuários com o papel de administrador pode realizar o cadastro.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve conseguir cadastrar mais de uma imagem para o mesmo carro.
Somente usuários com o papel de administrador pode realizar o cadastro.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RNF**

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto pelo mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

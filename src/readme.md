# MaisQueCardapio API

API REST para gerenciamento de produtos de um cardápio digital.

## Tecnologias

-   Node.js
-   Express
-   MongoDB (Mongoose)
-   CORS

## Como rodar o projeto

1. Instale as dependências:

    ```
    npm install
    ```

2. Configure a string de conexão do MongoDB em `src/server.js`.

3. Inicie o servidor:
    ```
    node src/server.js
    ```

O servidor irá rodar por padrão em `http://localhost:3000`.

---

## Endpoints

### Listar todos os produtos

**GET** `/api/products`

**Resposta:**

```json
[
    {
        "_id": "id_do_produto",
        "name": "Nome",
        "description": "Descrição",
        "price": 10.5,
        "image": "url-da-imagem"
    }
]
```

---

### Buscar produto por ID

**GET** `/api/products/:id`

**Resposta:**

```json
{
    "_id": "id_do_produto",
    "name": "Nome",
    "description": "Descrição",
    "price": 10.5,
    "image": "url-da-imagem"
}
```

---

### Criar novo produto

**POST** `/api/product`

**Body:**

```json
{
    "name": "Nome do produto",
    "description": "Descrição",
    "price": 10.5,
    "image": "url-da-imagem"
}
```

**Resposta:** Produto criado.

---

### Atualizar produto

**PUT** `/api/product/:id`

**Body:**

```json
{
    "name": "Nome atualizado",
    "description": "Descrição atualizada",
    "price": 15.0,
    "image": "nova-url-da-imagem"
}
```

**Resposta:** Produto atualizado.

---

### Deletar produto

**DELETE** `/api/product/:id`

**Resposta:** Produto removido.

---

## Observações

-   Todos os campos são obrigatórios ao criar ou atualizar um produto.
-   Certifique-se de que o MongoDB está rodando e a string de conexão está correta.
-   O CORS está habilitado para integração com o front-end.

---

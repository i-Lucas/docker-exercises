import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const _users = [
    { name: "John Doe" },
    { name: "Jane Doe" },
    { name: "Jack Doe" },
    { name: "Jill Doe" },
    { name: "Joe Doe" },
    { name: "Lucas Doe" },
    { name: "Lily Doe" },
    { name: "Lola Doe" },
]

await prisma.users.createMany({ data: _users });

const result = await prisma.users.findMany();
console.log(result);

// rodar o comando:
// docker run -it -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=DockerPostgres -p 1234:5432 postgres
// para criar a imagem do postgres no docker

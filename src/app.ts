import { createConnection, Connection } from 'typeorm';

import {LpLeadsTest} from './entities/lpLeadsEntity';

async () => { 
    const response: Connection = await createConnection({
        type: 'sqlite',
        database: './db/database.db',
        migrationsTableName: 'lp_local_leads_test',
        migrations: ["src/migration/*.ts"],
        entities: [LpLeadsTest, 'src/entities/*.ts'],
        cli: {
            migrationsDir: 'migration'
        }
    });

    const repository = response.getRepository(LpLeadsTest);

    console.log("Repository", repository);

    const lead = new LpLeadsTest();
    lead.firstName = "Andre";
    lead.lastName = "Kubotsu";
    lead.city = "Campinas";
    lead.country = "Brasil";
    lead.email = "teste@teste.com.br";
    lead.cpf = "12345678900";
    lead.postalCode = "13080570000";
    lead.region = "São Paulo";
    lead.id = 1;
    await repository.save(lead);

    console.log("GRAVOU!!")
}
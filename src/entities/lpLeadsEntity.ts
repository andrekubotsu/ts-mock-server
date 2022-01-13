import  {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('LP_LEADS')
export class LpLeadsTest {
    
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({name: "FIRST_NAME"})
    firstName: string;

    @Column({name: "LAST_NAME"})
    lastName: string;

    @Column({name: "CITY"})
    city: string;

    @Column({name: "REGION"})
    region: string;

    @Column({name: "´POSTAL_CODE"})
    postalCode: string;

    @Column({name: "COUNTRY"})
    country: string;

    @Column({name: "CPF"})
    cpf: string;

    @Column({name: "EMAIL"})
    email: string;
}
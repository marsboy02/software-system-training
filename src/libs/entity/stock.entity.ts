import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('stock')
export class StockEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    market: string;
}
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as moment from "moment/moment";

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    count: number;

    @Column()
    price: number;

    @Column({ type: 'varchar', default: moment().format('YYYY-MM-DD') })
    date: string;
}
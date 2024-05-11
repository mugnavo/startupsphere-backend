import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";
import { Startup } from "./startup.model";

@Entity()
export class View {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => Startup)
	@JoinColumn({ name: "startup_id" })
	startup: Startup;

	@Column({ type: "timestamp" })
	timestamp: Date;
}
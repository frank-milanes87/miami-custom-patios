import type { CreateUserDto } from "./user.dto";
import type { User } from "./user.types";

export class UserRepository {
  private static users: User[] = [];

  static async findAll(): Promise<User[]> {
    return this.users;
  }

  static async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) ?? null;
  }

  static async findByEmail(email: string): Promise<User | null> {
    return (
      this.users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase(),
      ) ?? null
    );
  }

  static async create(data: CreateUserDto): Promise<User> {
    const now = new Date();

    const user: User = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      createdAt: now,
      updatedAt: now,
    };

    this.users.push(user);

    return user;
  }
}
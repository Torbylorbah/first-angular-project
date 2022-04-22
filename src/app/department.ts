export class Department{
    id!: number;
    name! : string;
}

export class SubDepartment{
    id!: number
    name!: string
    department!: Department[]
}
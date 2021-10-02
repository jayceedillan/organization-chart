interface Employee {
  uniqueid: number;
  name: string;
  roleId: number;
  subordinates: Employee[];
}

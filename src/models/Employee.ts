interface Employee {
  uniqueid: number;
  name: string;
  roleId: number;
  reportTo: number;
  subordinates: Employee[];
}

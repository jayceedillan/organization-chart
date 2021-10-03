interface IEmployeeOrgApp {
  ceo: Employee;
  history: string[];
  move(employeeID: number, supervisorID: number): void;
  undo(): void;
  redo(): void;
  addHistory(): void;
}

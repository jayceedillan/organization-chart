export default class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;
  history: string[] = [];
  constructor(ceo: Employee) {
    this.ceo = ceo;
    this.addHistory();
  }

  addHistory(): void {
    this.history.push(JSON.stringify(this.ceo));
  }

  bindHistory(idx = 0): void {
    const empData = this.history[idx];
    this.ceo = JSON.parse(empData);
    this.history.splice(this.history.length - 1, 1);
  }

  async move(employeeID: number, supervisorID: number): Promise<void> {
    this.ceo = await this.assignedNewRole(this.ceo, employeeID, supervisorID);
    this.addHistory();
  }
  undo(): void {
    const countHistory = this.history.length - 2;
    this.bindHistory(countHistory);
  }
  redo(): void {
    this.bindHistory();
  }
  async assignedNewRole(
    empData: Employee,
    employeeID: number,
    supervisorID: number
  ): Promise<Employee> {
    let isAdded = false;
    let isDelete = false;

    empData.subordinates.forEach(async (elem) => {
      if (!isAdded) {
        if (Array.isArray(elem.subordinates)) {
          if (supervisorID === elem.roleId) {
            empData.subordinates.push({
              uniqueid: employeeID,
              name: "Bob Saget",
              subordinates: [],
              roleId: supervisorID,
            });
            isAdded = true;
          }

          if (employeeID === elem.uniqueid) {
            await this.removeOldRole(empData, elem);
            empData.subordinates = elem.subordinates;
            debugger;
            isDelete = true;
          }

          if (isAdded && isDelete) {
            return empData;
          }
          this.assignedNewRole(elem, employeeID, supervisorID);
        }
      }
    });
    return empData;
  }

  async removeOldRole(
    empData: Employee,
    subordinate: Employee
  ): Promise<Employee> {
    empData.subordinates = empData.subordinates.filter((item) => {
      return item !== subordinate;
    });
    return empData;
  }
}

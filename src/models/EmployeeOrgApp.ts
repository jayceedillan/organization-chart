import employeeData2 from "@/assets/EmployeeData2.json";
export default class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;

  constructor(public _ceo: Employee) {
    this.ceo = _ceo;
  }

  async move(employeeID: number, supervisorID: number): Promise<void> {
    this.ceo = await this.assignedNewRole(this.ceo, employeeID, supervisorID);
    // this.ceo = await this.removedOldRole(this.ceo, employeeID, supervisorID);
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
  redo(): void {
    throw new Error("Method not implemented.");
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
            empData.subordinates = elem.subordinates;;
            debugger
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

  async removeOldRole(empData: Employee, subordinate: Employee): Promise<Employee> {
    empData.subordinates = empData.subordinates.filter((item) => {
      return item !== subordinate
    })

    return empData;
  }
}


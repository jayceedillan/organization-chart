import { organizationModule } from "@/store/OrganizationModule";
import _ from "lodash";

export default class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: Employee;
  subordinates: Employee[] = [];
  history: string[] = [];
  isAdded = false;
  constructor(ceo: Employee) {
    this.ceo = ceo;
    this.subordinates = ceo.subordinates;
    this.addHistory();
  }

  async move(employeeID: number, supervisorID = 0): Promise<void> {
    this.isAdded = false;
    this.removeSubordinates(this.ceo.subordinates, employeeID);

    const employeeFrom = organizationModule.getDragFrom.subordinates;

    if (employeeFrom.length) {
      const employeeRoleFrom = await this.getEmployee(
        this.ceo.subordinates,
        "uniqueid",
        organizationModule.getDragFrom.reportTo
      );

      const uniqueId =
        employeeRoleFrom?.subordinates.length === 0
          ? employeeRoleFrom?.uniqueid
          : employeeRoleFrom?.subordinates[0].uniqueid;

      await this.updateSubordinates(this.ceo.subordinates, uniqueId);
    }

    await this.moveTo(
      this.ceo.subordinates,
      organizationModule.getDragTo.uniqueid,
      supervisorID
    );
    this.addHistory();
  }

  async moveTo(
    employees: Employee[],
    uniqueId: number,
    roleId: number
  ): Promise<void> {
    const employee = organizationModule.getDragFrom;
    const moveEmployee = {
      uniqueid: employee.uniqueid,
      name: employee.name,
      roleId: roleId,
      reportTo: organizationModule.getDragTo.reportTo,
      subordinates: [],
    };
    try {
      await employees.forEach((i: Employee) => {
        if (_.isEqual(i.uniqueid, uniqueId)) {
          employees.push(moveEmployee);
        } else {
          this.moveTo(i.subordinates, uniqueId, roleId);
        }
      });
    } catch {
      console.log("xxx");
    }
  }

  async updateSubordinates(
    employees: Employee[],
    uniqueId?: number
  ): Promise<void> {
    const employee = organizationModule.getDragFrom;
    const newEmployee = {
      uniqueid: employee.subordinates[0].uniqueid,
      name: employee.subordinates[0].name,
      roleId: organizationModule.getDragFrom.roleId,
      reportTo: organizationModule.getDragTo.reportTo,
      subordinates: employee.subordinates[0].subordinates,
    };

    try {
      employees.forEach((i: Employee) => {
        if (!this.isAdded) {
          if (_.isEqual(i.uniqueid, uniqueId)) {
            i.subordinates = [...i.subordinates, newEmployee];
            this.isAdded = true;
            return true;
          } else {
            this.updateSubordinates(i.subordinates, uniqueId);
          }
        }
      });
    } catch {
      console.log("xxx");
    }
  }

  undo(): void {
    const countHistory = this.history.length - 2;
    this.bindHistory(countHistory);
  }
  redo(): void {
    this.bindHistory();
  }

  async getEmployee(
    employees: Employee[],
    key: string,
    value: number
  ): Promise<Employee | undefined> {
    let employee;
    employees.some(function iter(a) {
      if (a.uniqueid === value) {
        employee = a;
        return true;
      }
      return Array.isArray(a.subordinates) && a.subordinates.some(iter);
    });

    return employee;
  }

  removeSubordinates(employee: Employee[], uniqueId: number): Employee[] {
    return employee
      .filter((el: Employee) => el.uniqueid !== uniqueId)
      .map((el: Employee) => {
        if (!el.subordinates || !el.subordinates.length) return el;
        el.subordinates = this.removeSubordinates(el.subordinates, uniqueId);
        return el;
      });
  }

  addHistory(): void {
    this.history.push(JSON.stringify(this.ceo));
  }

  bindHistory(idx = 0): void {
    const empData = this.history[idx];
    this.ceo = JSON.parse(empData);
    this.history.splice(this.history.length - 1, 1);
  }
}

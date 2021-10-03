import { Component, Vue } from "vue-property-decorator";
import employeeData from "@/assets/EmployeeData.json";
import OrganizationTree from "@/organization-chart/component/OrganizationTree.vue";
import EmployeeOrgApp from "@/models/EmployeeOrgApp";
@Component({
    components: {
        OrganizationTree,
    },
})
export default class Organization extends Vue {
    empData = employeeData as Employee;

    // testing = "aloha";
    app: EmployeeOrgApp = new EmployeeOrgApp(this.empData); // = new EmployeeOrgApp(this.employee);}

    get employees(): Employee {
        return this.app.ceo;
    }

    get isDisabled(): boolean {
        return this.app.history.length < 2;
    }

    async move(): Promise<void> {
        await this.app.move(8, 2);
        // this.employees = this.app.ceo;
        // this.testing = "yehey";
        // this.employee.subordinates.push({
        //     uniqueid: 23,
        //     name: "Bob Saget",
        //     subordinates: [],
        //     roleId: 12,
        // });

        //  console.log(this.employee)
        // setTimeout(() => {
        //     alert(this.employee.subordinates.length);
        // }, 550);
    }

    undo(): void {
        alert('xx');
        this.app.undo();
    }

    redo(): void {
        this.app.redo();
    }
}

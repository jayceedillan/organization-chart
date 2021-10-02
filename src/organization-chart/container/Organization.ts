import { Component, Vue, Watch } from "vue-property-decorator";
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
    employees!: Employee;
    testing = "aloha";
    app: EmployeeOrgApp = new EmployeeOrgApp(this.empData); // = new EmployeeOrgApp(this.employee);



    created(): void {
        console.log(this.app.ceo);
        this.employees = this.app.ceo; //JSON.parse(JSON.stringify(this.empData)) as Employee;
    }
    async move(): Promise<void> {
        await this.app.move(8, 2);
        this.employees = this.app.ceo;
        this.testing = "yehey";
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
        alert("xxx");
    }

    redo(): void {
        alert("xxx");
    }
}

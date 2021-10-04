import { Component, Vue, Watch } from "vue-property-decorator";
import employeeData from "@/assets/EmployeeData.json";
import OrganizationTree from "@/organization-chart/component/OrganizationTree.vue";
import EmployeeOrgApp from "@/models/EmployeeOrgApp";
import { organizationModule } from "@/store/OrganizationModule";
@Component({
  components: {
    OrganizationTree,
  },
})
export default class Organization extends Vue {
  empData = employeeData as Employee;
  app: EmployeeOrgApp = new EmployeeOrgApp(this.empData);

  get employees(): Employee {
    return this.app.ceo;
  }

  get isDisabled(): boolean {
    return this.app.history.length < 2;
  }

  get getDragFrom(): Employee {
    return organizationModule.getDragFrom;
  }

  get getDragTo(): Employee {
    return organizationModule.getDragTo;
  }

  get isFinishDrag(): boolean {
    return organizationModule.getIsFinishDrag;
  }

  @Watch("isFinishDrag")
  async changeFinishDrag(): Promise<void> {
    if (this.isFinishDrag && this.getDragTo.uniqueid) {
      if (this.getDragFrom.roleId < this.getDragTo.roleId) {
        alert("demotion of position is not allowed");
        return;
      }

      await this.app.move(this.getDragFrom.uniqueid, this.getDragTo.roleId);
      organizationModule.bindFinishDrag(false);
    }
  }

  undo(): void {
    this.app.undo();
  }

  redo(): void {
    this.app.redo();
  }
}

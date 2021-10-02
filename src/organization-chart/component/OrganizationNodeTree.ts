import { Component, Prop, Vue } from "vue-property-decorator";
// import employeeData from "@/assets/EmployeeData.json";
// import EmployeeOrgApp from "@/models/EmployeeOrgApp";

@Component
export default class OrganizationNodeTree extends Vue {
  // empData = JSON.parse(JSON.stringify(employeeData)) as Employee;
  // startEmployee = {} as Employee;
  // dropEmployee = {} as Employee;

  @Prop()
  node!: Employee;

  // created(): void {
  //     // this.DragDropChanges(this.empData);
  // }
  // startDrag(item: Employee, pos: null, e: DragEvent): void {
  //     console.log(item);
  //     console.log(pos);
  //     console.log(e);

  //     this.startEmployee.name = item.name;
  //     this.startEmployee.uniqueid = item.uniqueid;

  //     // this.startLoc = e.clientY;
  //     // this.dragging = true;
  //     // this.dragFrom = item;
  // }
  // async finishDrag(item: Employee, pos: HTMLElement): Promise<void> {
  //     console.log(item);
  //     console.log(pos);

  //     this.startEmployee.name = item.name;
  //     this.startEmployee.uniqueid = item.uniqueid;

  //     this.DragDropChanges(this.empData);
  //     alert('finish drag')
  //     // this.startEmployee.name = item.name;
  //     // this.startEmployee.uniqueid = item.uniqueid;
  //     // alert('xxx');
  //     // debugger;

  //     // if (
  //     //     (!item.ispinnedboard && this.isFavorite) ||
  //     //     (item.ispinnedboard && !this.isFavorite)
  //     // ) {
  //     //     return;
  //     // }

  //     // this.dashboardList.splice(pos, 1);
  //     // this.dashboardList.splice(this.over.pos, 0, item);
  //     // this.over = { pos: 0, item: "", dir: "" };

  //     // await this.dashboardUserService.updateDashboardUserOrdering(
  //     //     this.dashboardList,
  //     //     dashboardManagerModule.getCurrentOrganizationId
  //     // );
  // }

  // onDragOver(item: Employee, pos: null, e: DragEvent) {
  //     console.log(item);
  //     console.log(pos);
  //     console.log(e);

  //     this.startEmployee.name = item.name;
  //     this.startEmployee.uniqueid = item.uniqueid;
  //     //alert('dsrag over');
  //     e.preventDefault();
  //     // const dir = this.startLoc < e.clientY ? "down" : "up";
  //     // setTimeout(() => {
  //     //     this.over = { item, pos, dir };
  //     // }, 50);
  //     // e.preventDefault();
  // }

  // onDrop(item: Employee, pos: HTMLElement, e: DragEvent) {
  //     console.log(item);
  //     console.log(pos);
  //     console.log(e);
  //     console.log(this.empData);
  //     this.dropEmployee = item;
  //     //alert('ondrop')
  //     //this.DragDropChanges(this.empData);

  //     // e.preventDefault();

  //     //debugger;
  //     // this.isFavorite = false;
  //     // if (item.ispinnedboard) {
  //     //     this.isFavorite = true;
  //     // }
  //     // this.DragDropChanges(item);
  // }
  // DragDropChanges(nodeChanged: Employee) {

  //     nodeChanged.subordinates.forEach(elem => {

  //         if (Array.isArray(elem.subordinates)) {
  //             if (this.dropEmployee.name === elem.name) {
  //                 alert(this.startEmployee.name)
  //                 nodeChanged.subordinates.push(this.startEmployee);
  //                 console.log(nodeChanged.subordinates)
  //                 debugger
  //                 alert('yahoo');
  //                 return;
  //             }
  //             this.DragDropChanges(elem);
  //         } else {

  //             console.log(elem);
  //         }
  //     });
  //     // if (nodeChanged.subordinates != null) {
  //     //     debugger;
  //     //     for (let i = 0; i < this.empData.subordinates.length;) {
  //     //         const temp = i;
  //     //         this.DragDropChanges(this.empData.subordinates[i]);
  //     //         i = temp;
  //     //     }
  //     // }
  // }
  //      function DragDropChanges(nodeChanged) {
  //     if (nodeChanged.children != null) {
  //         for (i = 0; i < nodeChanged.children.length;
  //                 var temp = i;
  //         DragDropChanges(nodeChanged.children[i]);
  //         i = temp;
  //     }
  // }
  //     }
}

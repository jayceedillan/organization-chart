import { organizationModule } from "@/store/OrganizationModule";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrganizationNodeTree extends Vue {
  @Prop()
  node!: Employee;

  startDrag(item: Employee): void {
    organizationModule.bindFinishDrag(false);
    organizationModule.bindDragFrom(item);
  }
  finishDrag(e: DragEvent): void {
    organizationModule.bindFinishDrag(true);
    e.preventDefault();
  }

  onDragOver(e: DragEvent): void {
    e.preventDefault();
  }

  onDrop(item: Employee): void {
    organizationModule.bindDragTo(item);
  }
}

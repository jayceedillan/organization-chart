import { Component, Prop, Vue } from "vue-property-decorator";
import OrganizationNodeTree from "@/organization-chart/component/OrganizationNodeTree.vue";
@Component({
  components: {
    OrganizationNodeTree,
  },
})
export default class OrganizationTree extends Vue {
  @Prop({ type: Object })
  treeData!: Employee;
}

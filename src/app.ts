import { Component, Vue } from "vue-property-decorator";
import Organization from "@/organization-chart/container/Organization.vue";
@Component({
  components: {
    Organization,
  },
})
export default class app extends Vue {}

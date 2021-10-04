import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from "./store";

@Module({ name: "connector-module", dynamic: true, store, namespaced: true })
export default class OrganizationModule extends VuexModule {
  dragFrom: Employee = {
    uniqueid: 0,
    name: "",
    roleId: 0,
    reportTo: 0,
    subordinates: [],
  };

  dragTo: Employee = {
    uniqueid: 0,
    name: "",
    roleId: 0,
    reportTo: 0,
    subordinates: [],
  };

  isFinishDrag = false;

  get getDragFrom(): Employee {
    return this.dragFrom;
  }

  get getDragTo(): Employee {
    return this.dragTo;
  }

  get getIsFinishDrag(): boolean {
    return this.isFinishDrag;
  }

  @Mutation
  setDragFrom(payload: Employee): void {
    this.dragFrom = payload;
  }

  @Mutation
  setDragTo(payload: Employee): void {
    this.dragTo = payload;
  }

  @Mutation
  setIsFinishDrag(payload: boolean): void {
    this.isFinishDrag = payload;
  }

  @Action
  public bindDragFrom(dragFrom: Employee): void {
    this.context.commit("setDragFrom", dragFrom);
  }

  @Action
  public bindDragTo(dragTo: Employee): void {
    this.context.commit("setDragTo", dragTo);
  }

  @Action
  public bindFinishDrag(isFinishDrag: boolean): void {
    this.context.commit("setIsFinishDrag", isFinishDrag);
  }
}

export const organizationModule: OrganizationModule =
  getModule(OrganizationModule);

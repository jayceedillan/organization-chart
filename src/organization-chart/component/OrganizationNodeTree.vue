<template>
  <li class="name">
    <span
      draggable="true"
      @dragover="(e) => onDragOver(e)"
      @drop="(e) => onDrop(node)"
      @dragend="(e) => finishDrag(e)"
      @dragstart="(e) => startDrag(node)"
    >
      <small>{{ node.name }}</small>
    </span>
    <ul v-if="node.subordinates && node.subordinates.length">
      <organization-node-tree
        v-for="child in node.subordinates"
        :node="child"
        :key="child.name"
      ></organization-node-tree>
    </ul>
  </li>
</template>
<script lang="ts" src="./OrganizationNodeTree.ts"></script>

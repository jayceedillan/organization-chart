<template>
  <li class="name">
    <span>
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

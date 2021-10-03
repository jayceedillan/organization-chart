<template>
  <div>
    {{ employees.subordinates.length }}
    {{ isDisabled }}
    <div class="flex justify-center">
      <div class="org-container">
        <organization-tree :treeData="employees" />
      </div>
    </div>

    <div class="flex justify-center">
      <button type="button" class="button" @click="move">Move</button>
      <button
        class="button"
        @click="undo"
        :disabled="isDisabled"
        :class="{ 'disable-input': isDisabled }"
      >
        Undo
      </button>
      <button
        class="button"
        @click="redo"
        :disabled="isDisabled"
        :class="{ 'disable-input': isDisabled }"
      >
        Redo
      </button>
    </div>
  </div>
</template>
<script lang="ts" src="./Organization.ts"></script>
<style lang="scss" src="./Organization.scss"></style>

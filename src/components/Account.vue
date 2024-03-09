<script setup lang="ts">
import { Dropdown, Avatar, Modal } from "@/components";
import { useAccount } from "@/composables";
import { userAuthStore } from "@/store";
import { computed, watchEffect } from "vue";
import DeletePrompt from "./DeletePrompt.vue";

const { accountOptions, performDropdownActions, closeModal, isOpen, logout } =
  useAccount();
const { getUser } = userAuthStore();
const username = computed(() => getUser()?.username);

watchEffect(() => {
  console.log({ isOpen: isOpen.value });
});
console.log({ username, user: getUser() });
</script>

<template>
  <div class="w-12 h-12">
    <Dropdown
      :options="accountOptions"
      @perform:action="performDropdownActions"
    >
      <Avatar :username="username" />
    </Dropdown>
  </div>

  <Modal :is-open="isOpen" @close-modal="closeModal">
    <DeletePrompt
      submit-btn-label="Logout"
      title="Logout"
      description="Are you sure you want to logout?"
      @close-modal="closeModal"
      @submit="logout"
    />
  </Modal>
</template>

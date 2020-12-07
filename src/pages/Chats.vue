<template>
  <section class="flex w-full">
      <div class="m-auto">
          <h1 class="text-center text-2xl">Real Time Chat</h1>
          <div class="rounded-lg border">
              <div class="h-64 p-2">
                <div v-for="chat in state.chats" :key="chat.message" class="w-full"
                :class="chat.userId===userId ? 'text-right' : 'text-left'">
                     {{chat.message}} 
                </div>
              </div>
              <input v-model='state.message' placeholder='Start Typing' @keydown.enter="addMessage" class="p-1 border rounded shadow"/>
          </div>
      </div>
      
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { chatsRef } from "../utilities/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });
    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);
    onMounted(async () => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });
    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: userId.value, message: state.message });
      state.message = "";
    }
    return { state, addMessage, userId };
  },
};
</script>

<style>

</style>
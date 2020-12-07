<template>
<button class="px-2 py-1 border rounded my-4" @click="isModalOpen=true">Add User</button>
    <teleport to='body'>
        <Modal v-if="isModalOpen" @close='isModalOpen=false'>
            <template #title>
                Add new user
            </template>
            <template #body>
                <form @submit.prevent="submit">
                    <div class="p-2">
                        <label>Name</label>
                        <input class="w-full p-2 rounded border" placeholder="User Name" v-model="state.form.name" type="text"/>
                    </div>
                    <div class="p-2">
                        <label>Email</label>
                        <input class="w-full p-2 rounded border" placeholder="User Email" v-model="state.form.email" type="email"/>
                    </div>
                    <div class="p-2">
                        <label>Avatar</label>
                        <input class="w-full p-2 rounded border" placeholder="Avatar Url" v-model="state.form.avatar" type="text"/>
                    </div>
                    <div class="p-2">
                        <input class="w-full p-2 rounded border hover:bg-gray-300" type="submit" value="Create"/>
                    </div>    
                </form>
            </template>
        </Modal>
    </teleport>
</template>

<script>
import Modal from '../Modal';
import {reactive, ref} from 'vue';
import axios from '../../plugins/axios';
export default {
     components:{Modal},
     
    setup(_,{emit}){
        const isModalOpen=ref(false);
        const state =reactive({
            form:{
                name:'',
                email:'',
                avatar:'',
            },
        });
        async function submit(){
           const {data}=await axios.post('/users',state.form);
           emit('new-user-added',data);
          // state.users.push(data);
            state.form.name="";
            state.form.email="";
            state.form.avatar="";
            isModalOpen.value=false;
        }
        return {isModalOpen,submit,state};

    }
}
</script>

<style>

</style>
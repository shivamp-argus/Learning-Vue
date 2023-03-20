<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="enteredName">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="enteredEmail">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="text" name="phone" v-model="enteredPhone">
        </div>
        <div>
            <button>Add New Friend</button>
        </div>
    </form>
</template>

<script>
export default{
    emits:['add-contact'],
    data(){
        return{
            enteredName:'',
            enteredEmail:'',
            enteredPhone:''
        }
    },
    methods:{
        submitData(){
            this.$emit('add-contact',this.enteredName,this.enteredEmail,this.enteredPhone)
        }
    }
}
</script>
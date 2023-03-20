<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible?'Hide':'Show' }} details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone : {{ friend.phone }}</li>
            <li>Email : {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default{
    data(){
        return{
            detailsAreVisible:false,
            friend:{
                id:'shivam',
                name:'Shivam Patel',
                phone:'97325 12355',
                email:'shivam@argusoft.com'
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>

<style>

</style>
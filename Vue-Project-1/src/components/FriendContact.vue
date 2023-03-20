<template>
        <li>
        <h2>{{ name }} {{ isFavourite  ? '(Fav)':' ' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible?'Hide':'Show' }} details</button>
        <button @click="toggleFav">Fav</button>
        <ul v-if="detailsAreVisible">
            <li>Phone : {{ phoneNumber }}</li>
            <li>Email : {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete Friend</button>
    </li>
</template>

<script>
export default{
    // props : ['name','emailAddress','phoneNumber','isFavourite'],
    props : {
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        emailAddress:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        isFavourite:{
            type:Boolean,
            required:false,
            default:false,
            
        }
    },
    emits:['toggle-favourite','delete'],
    // emits:{
    //     'toggle-favourite':function(id){
    //         if(id){
    //             return true
    //         }
    //         else{
    //             console.warn("Id is missing")
    //             return false
    //         }
    //     },
            
    // },
    data(){
        return{
            detailsAreVisible:false,
            
            
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFav(){
            this.$emit('toggle-favourite',this.id)
        },
        deleteFriend(){
            console.log(this.id)
            this.$emit('delete',this.id)
        }
    }
}
</script>

<style>

</style>
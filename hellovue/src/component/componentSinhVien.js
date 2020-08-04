import SinhVien from './CompoSinhVien.vue'
export default {
    name: 'ListSinhVien',
    data(){
        return{

        }
    },
    props:{
        listsinhvien:Array,
    },
    components:{
        SinhVien
    },

    methods:{
        xoaUserId(data){
            this.$emit('xoaListUserById',data);
        }
    },
}
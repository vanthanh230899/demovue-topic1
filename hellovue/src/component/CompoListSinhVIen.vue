<template>
<div class="lala">
     <div class="listSinhVien">
        <h1>hello list sinh viên</h1>
        <sinh-vien v-for="(sinhvien,index) in listsinhvien" :key="index" :sinhvien = sinhvien
            v-on:xoaUser="xoaUserId"
            :class="{nen:sinhvien.active == true}"
        />
    </div>
</div>
   
</template>

<script src="./componentSinhVien.js">

</script>

<style>
  
</style>
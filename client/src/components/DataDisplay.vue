<template>
    <div>
        <span>Show data in table,paginate and filter</span><br>
        <input placeholder="Search..." v-model="searchInput"/>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedData">
                    <td>{{ item.id }}</td>
                    <td>{{ item.userid }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.body }}</td>
                </tr>
            </tbody>
        </table>

        <div>
            <button @click="handlePrev">Prev</button>
            <span>{{ currentPage }} out of {{ totalPages }} Pages</span>
            <button @click="handleNext">Next</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

const apiData = ref([])
const currentPage = ref(1)
const entriesPerPage = ref(10)
const searchInput = ref('')


onMounted(() => { 
    getData()
})

const totalPages = computed(() => { 
    return Math.ceil(filterData.value.length / entriesPerPage.value)
})

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) *entriesPerPage.value
    const end = start + entriesPerPage.value
    return filterData.value.slice(start,end)
})

const filterData = computed(() => { 
    if(!searchInput.value.trim()) return apiData.value

    return apiData.value.filter(item => item.title.toLowerCase().includes(searchInput.value.toLowerCase()))
})

const getData = async() => { 
    let res
    try { 
        res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        apiData.value = res.data
    }
    catch(err) { 
        console.log(err,"failed to get data")
    }
}

const handlePrev = () => { 
    if(currentPage.value > 1) { 
        currentPage.value --
    }
}

const handleNext = () => { 
    if(currentPage.value < totalPages.value) { 
        currentPage.value ++
    }
}

</script>

<style>
input{ 
    width: 500px;
}
    table { 
        border: 1px solid;
        thead th{
            border: 1px solid;
            background-color: rgb(180, 255, 255);
        }

        tbody td { 
            border: 1px solid;
            background-color: rgb(204, 203, 203);
        }
    }
</style>
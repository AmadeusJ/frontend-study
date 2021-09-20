<template>
    <div>
        <transition-group name="list" tag="ul">
            <li class="shadow" v-for="(todoItem, idx) in this.storedTodoItems" v-bind:key="todoItem.item">
                <i class="checkBtn fas fa-check" 
                    :class="{ checkBtnCompleted: todoItem.completed }" 
                    @click="toggleComplete({ todoItem, idx })"></i>
                <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo({ todoItem, idx })">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    data: function () {
        return {

        }
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
    },
    // props: ['propsData'],
    methods: {
        ...mapMutations({       // 객체 리터럴 사용
            removeTodo: 'removeOneItem',         // 인자는 호출하는 부분에서 넘겨주면 된다.
            toggleComplete: 'toggleOneItem'
        }),

        // removeTodo: function(todoItem, idx) {
        //     // this.$emit('removeItem', todoItem, idx);
        //     this.$store.commit('removeOneItem', { todoItem, idx });
        // },
        // toggleComplete(todoItem, idx) {
        //     // this.$emit('toggleItem', todoItem, idx);
        //     this.$store.commit('toggleOneItem', { todoItem, idx });
        // },
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
# tinymce-editor.vue 

1. 将 `tinymce` 文件夹放在 `public` 文件夹中

2. 在需要的页面中引入 `tinymce-editor.vue` 组件

3. 需要引入的 `xxx.vue` 文件

   ```vue
   <template>
   	<tinymce-editor
             ref="editor"
             v-model="msg"
             :disabled="disabled"
             class="tinymce-editor"
           >
       </tinymce-editor>
   </template>
   
   <script>
   import TinymceEditor from '@/components/tinymce-editor'
   
   export default {
     components: {
       TinymceEditor
     },
     data () {
       return {
         msg: '欢迎使用 Tinymce 富文本编辑器',
         disabled: false
       }
     },
     methods: {
       // 鼠标单击的事件
       submit () {
         // console.log(this.msg)
         if (this.msg === '') {
           this.$message({
             message: '发布的内容不能为空！',
             type: 'warning'
           })
         } else {
           this.$message({
             message: '恭喜你，文章发布成功！',
             type: 'success'
           })
           this.$refs.editor.clear()
         }
       },
       // 清空内容
       clear () {
         if (this.msg === '') {
           this.$message({
             message: '内容已经为空！',
             type: 'warning'
           })
         } else {
           this.$message({
             message: '内容清除成功！',
             type: 'success'
           })
           this.$refs.editor.clear()
         }
       }
     }
   }
   </script>
   ```

   


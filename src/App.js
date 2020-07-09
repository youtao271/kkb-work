// template -> render
import { defineComponent, h, onMounted, onUnMounted, reactive,ref } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    // 创建一个响应式对象
    const x = ref(100);
    const y = ref(300);

    // 让地图动起来
    // y ++
    // 循环
    // setInterval
    // requestAnimationFrame
    // pixi 循环
    const speed =10;
    const handleMove = ()=>{
      y.value += speed;
    }
    let handle;
    onMounted(() => {
      let arrow = true;
      handle = setInterval(()=>{
        if(arrow){
          x.value += speed;
        }else{
          x.value -= speed;
        }
        if(x.value>=650)  arrow = false;
        if(x.value<=100)  arrow = true;
      }, 100)
      console.log(x)
    });
    
    /* onUnMounted(() => {

    }); */

    return {
      x,
      y,
    };
  },
  render(ctx) {
    // 创建虚拟节点
    // <div x="20" y="20">开课吧nb</div>
    // const vnode = h("circle", { x: 200, y: 200 },"开课吧nb");
    console.log('render+', ctx.x, ctx.y);
    return h("circle", { x: ctx.x, y: ctx.y });
    //return vnode;
  },
});

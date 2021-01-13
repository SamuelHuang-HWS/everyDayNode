// async/await

// 理解async

// 这个修饰符写在函数的前面，函数前面由async修饰的时候，函数默认返回一个promise也就相当于
async function asyncfunc (){
    return 1;
}
// 等于
function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}
// 测试函数
asyncfunc1().then(res=>{
    console.log(res);
})
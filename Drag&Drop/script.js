const sortlist=document.querySelector(".list");
const items=document.querySelectorAll(".item");

items.forEach(item=>{
    item.addEventListener("drag",()=>{
        setTimeout(()=>item.classList.add("drag"),0);
    });

    item.addEventListener("dragend",()=>item.classList.remove("drag"));
});

const initsortlist=(e)=>{
    e.preventDefault();
    const dragitem=sortlist.querySelector(".drag");

    const siblings=[...sortlist.querySelectorAll(".item:not(.drag)")];

    let nextsibling=siblings.find(sibling=>{
        return e.clientY <= sibling.offsetTop+sibling.offsetHeight /2;
    });
    sortlist.insertBefore(dragitem,nextsibling);
}

sortlist.addEventListener("dragover",initsortlist);
sortlist.addEventListener("dragenter",e=>e.preventDefault());
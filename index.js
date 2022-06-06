const h1 = document.createElement("h1");
h1.textContent = "Работа с DOM";
document.body.append(h1);

const a = document.createElement("a");
a.href = "https://javascript.ru/tutorial/dom/intro";
a.textContent = "DOM";
const m = document.getElementById("main");
m.append(a);

const color = color =>{
    document.body.tyle.backgroundColor = color
}
color('yellow')


const t = text => {
    const list = document.getElementById("list")
    const li = document.createElement("li")
    li.textContent = text;
    list.append(li)
}
t('workspace')

const del = elId => {
     const delEl = document.getElementById(elId)
    delEl.remove()
}